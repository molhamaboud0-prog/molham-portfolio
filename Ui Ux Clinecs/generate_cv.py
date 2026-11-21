#!/usr/bin/env python3
"""Generate Molham Aboud CV (Software Engineer + UI/UX) as a 2-page PDF."""

from reportlab.lib.colors import HexColor, white
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    Flowable,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

NAVY = HexColor("#1B365D")
BODY = HexColor("#2C2C2C")
MUTED = HexColor("#7A8494")
RULE = HexColor("#1B365D")
PAGE_W, PAGE_H = A4
LEFT = 18 * mm
RIGHT = 18 * mm
TOP = 14 * mm
BOTTOM = 14 * mm
CONTENT_W = PAGE_W - LEFT - RIGHT


class AccentHeading(Flowable):
    def __init__(self, text, width=CONTENT_W):
        super().__init__()
        self.text = text
        self.width = width
        self.height = 16

    def draw(self):
        self.canv.setFillColor(NAVY)
        self.canv.rect(0, 2.5, 2.6, 11.5, fill=1, stroke=0)
        self.canv.setFillColor(NAVY)
        self.canv.setFont("Helvetica-Bold", 11)
        self.canv.drawString(9, 5.2, self.text.upper())


class HeaderBlock(Flowable):
    def __init__(self, width=CONTENT_W):
        super().__init__()
        self.width = width
        self.height = 62

    def draw(self):
        c = self.canv
        name = "MOLHAM ABOUD"
        font, size, tracking = "Times-Bold", 23, 1.35
        c.setFillColor(NAVY)
        c.setFont(font, size)
        total = sum(c.stringWidth(ch, font, size) + tracking for ch in name) - tracking
        x = (self.width - total) / 2
        for ch in name:
            c.drawString(x, 40, ch)
            x += c.stringWidth(ch, font, size) + tracking

        c.setFont("Times-Roman", 12)
        c.drawCentredString(self.width / 2, 22, "Software Engineer")

        c.setFillColor(MUTED)
        c.setFont("Helvetica", 8.6)
        c.drawCentredString(
            self.width / 2,
            7,
            "Damascus, Syria   •   +963 945 734 346   •   molhamaboud0@gmail.com",
        )

        c.setStrokeColor(RULE)
        c.setLineWidth(1.2)
        c.line(0, 0, self.width, 0)


def styles():
    s = getSampleStyleSheet()
    s.add(
        ParagraphStyle(
            "BodyJust",
            fontName="Helvetica",
            fontSize=9.2,
            leading=12.4,
            textColor=BODY,
            alignment=TA_JUSTIFY,
            spaceAfter=0,
        )
    )
    s.add(
        ParagraphStyle(
            "SkillLabel",
            fontName="Helvetica-Bold",
            fontSize=9.1,
            leading=12.2,
            textColor=BODY,
            alignment=TA_LEFT,
        )
    )
    s.add(
        ParagraphStyle(
            "SkillValue",
            fontName="Helvetica",
            fontSize=9.1,
            leading=12.2,
            textColor=BODY,
            alignment=TA_LEFT,
        )
    )
    s.add(
        ParagraphStyle(
            "ProjTitle",
            fontName="Helvetica-Bold",
            fontSize=10,
            leading=13,
            textColor=BODY,
            spaceBefore=7,
            spaceAfter=2,
        )
    )
    s.add(
        ParagraphStyle(
            "CvBullet",
            fontName="Helvetica",
            fontSize=9.2,
            leading=12.3,
            textColor=BODY,
            leftIndent=12,
            bulletIndent=0,
        )
    )
    s.add(
        ParagraphStyle(
            "EduTitle",
            fontName="Helvetica-Bold",
            fontSize=10,
            leading=13,
            textColor=BODY,
            spaceBefore=2,
            spaceAfter=0,
        )
    )
    s.add(
        ParagraphStyle(
            "EduSub",
            fontName="Helvetica",
            fontSize=9.2,
            leading=12.3,
            textColor=BODY,
        )
    )
    return s


def skill_table(rows, st):
    data = []
    for label, value in rows:
        data.append(
            [
                Paragraph(label.replace("\n", "<br/>"), st["SkillLabel"]),
                Paragraph(value, st["SkillValue"]),
            ]
        )
    t = Table(data, colWidths=[48 * mm, CONTENT_W - 48 * mm])
    t.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (0, -1), 8),
                ("RIGHTPADDING", (1, 0), (1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 2.4),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 2.4),
            ]
        )
    )
    return t


def bullets(items, st):
    out = []
    for item in items:
        out.append(Paragraph(f"•  {item}", st["CvBullet"]))
    return out


def build():
    st = styles()
    story = []
    story.append(HeaderBlock())
    story.append(Spacer(1, 11))

    story.append(AccentHeading("Profile Summary"))
    story.append(Spacer(1, 5))
    story.append(
        Paragraph(
            "Motivated Information Engineering graduate combining a strong software "
            "development skillset with a solid foundation in network infrastructure. "
            "Proven capability in building cross-platform mobile applications using "
            "React Native, managing RESTful API endpoints, and implementing strict OOP "
            "paradigms. Skilled in <b>Figma</b> and actively learning <b>UI/UX design</b> "
            "to complement development work. Adept at designing and troubleshooting "
            "small-to-medium scale Cisco network environments, ensuring robust security "
            "and seamless performance. A fast learner and bilingual communicator looking "
            "to leverage development expertise in a dedicated software engineering role.",
            st["BodyJust"],
        )
    )

    story.append(Spacer(1, 10))
    story.append(AccentHeading("Technical Skills"))
    story.append(Spacer(1, 4))
    story.append(
        skill_table(
            [
                (
                    "UI/UX Design:",
                    "Figma, Wireframing, User Flows, Visual Design, Mobile &amp; Web UI",
                ),
                (
                    "Software &amp; Mobile<br/>Development:",
                    "React Native, Java, C#, Object-Oriented Programming (OOP), RESTful API "
                    "Integration, State Management, Navigation Stacks",
                ),
                (
                    "Networking &amp; Cisco<br/>Infrastructure (CCNA):",
                    "Routing Protocols (OSPFv2/v3, EIGRP, Static Routing), Switching "
                    "Technologies (VLANs, STP/RSTP, Inter-VLAN Routing, EtherChannel), IP "
                    "Services &amp; Security (IPv4/IPv6 Subnetting, DHCP, NAT/PAT, ACLs), "
                    "Network Architecture (LAN/WAN Topologies, Device Hardening, Network "
                    "Automation Fundamentals)",
                ),
                (
                    "Databases &amp; Tools:",
                    "SQL, Figma, Cisco Packet Tracer, Wireshark, GNS3",
                ),
                (
                    "Operating Systems:",
                    "Linux, Windows Server, Windows Desktop",
                ),
                (
                    "Core Competencies:",
                    "Systems Analysis, Agile Self-Learning, Problem Solving, Network "
                    "Troubleshooting, UI/UX Design",
                ),
            ],
            st,
        )
    )

    story.append(Spacer(1, 10))
    story.append(AccentHeading("Projects & Practical Experience"))
    story.append(Spacer(1, 3))

    story.append(
        Paragraph(
            "Cross-Platform Mobile Application (React Native)",
            st["ProjTitle"],
        )
    )
    story.extend(
        bullets(
            [
                "Developed a functional mobile application featuring multi-screen stack navigation and structured user input forms.",
                "Integrated RESTful API endpoints to handle asynchronous data retrieval and dynamic state management.",
            ],
            st,
        )
    )

    story.append(
        Paragraph("Object-Oriented Mini System (Java)", st["ProjTitle"])
    )
    story.extend(
        bullets(
            [
                "Engineered a console-based application applying strict OOP principles including inheritance, encapsulation, and polymorphism for robust data handling.",
            ],
            st,
        )
    )

    story.append(
        Paragraph(
            "Small Office Network Design &amp; Implementation (Cisco Packet Tracer)",
            st["ProjTitle"],
        )
    )
    story.extend(
        bullets(
            [
                "Designed and deployed a simulated multi-VLAN network infrastructure using Cisco Packet Tracer.",
                "Configured inter-VLAN routing, dynamic DHCP pools, and NAT protocols to ensure secure, efficient internet connectivity.",
            ],
            st,
        )
    )

    story.append(
        Paragraph(
            "Router &amp; Switch Configuration Lab (Cisco Infrastructure)",
            st["ProjTitle"],
        )
    )
    story.extend(
        bullets(
            [
                "Implemented OSPF routing and static routes across a robust multi-router topology.",
                "Secured network traffic utilizing Access Control Lists (ACLs) and executed deep-packet troubleshooting to resolve connectivity bottlenecks.",
            ],
            st,
        )
    )

    edu = [
        AccentHeading("Education"),
        Spacer(1, 4),
        Paragraph("Bachelor of Information Engineering", st["EduTitle"]),
        Paragraph(
            "Al Rasheed International Private University — Graduated",
            st["EduSub"],
        ),
        Paragraph(
            "Core Focus: Software Engineering, Advanced Networking, Database Management Systems, Operating Systems.",
            st["EduSub"],
        ),
    ]
    courses = [
        AccentHeading("Courses & Certifications"),
        Spacer(1, 4),
        *bullets(
            [
                "UI/UX Design &amp; Figma - Self-Study",
                "React Native Mobile Development - Online Course (YouTube / Self-Study)",
                "C# Programming Certification - Syrian Society for Informatics",
                "Advanced Java &amp; Database Systems - University Practical Program",
                "Cisco Certified Network Associate (CCNA) - Online Training (Self-Study / Cisco Academy)",
            ],
            st,
        ),
    ]
    langs = [
        AccentHeading("Languages"),
        Spacer(1, 4),
        *bullets(
            [
                "Arabic: Native Speaker",
                "English: Fluent (Speaking, Writing, Technical Communication)",
            ],
            st,
        ),
    ]
    story.append(Spacer(1, 10))
    story.append(KeepTogether(edu))
    story.append(Spacer(1, 10))
    story.append(KeepTogether(courses))
    story.append(Spacer(1, 10))
    story.append(KeepTogether(langs))

    return story


def main():
    out_path = "/Users/sif/Desktop/Molham_Aboud Software_Engineer CV.pdf"
    doc = SimpleDocTemplate(
        out_path,
        pagesize=A4,
        leftMargin=LEFT,
        rightMargin=RIGHT,
        topMargin=TOP,
        bottomMargin=BOTTOM,
        title="Molham Aboud — Software Engineer",
        author="Molham Aboud",
    )
    doc.build(build())
    print(out_path)


if __name__ == "__main__":
    main()
