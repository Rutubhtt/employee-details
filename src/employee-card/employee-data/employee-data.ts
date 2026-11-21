export interface EmployeeData {
    Eid: number;
    EName: string;
    EProfile: string;
    ETitle: string;
    EMail: string;
    EContact: number;
    Experience: number;
    ESkills: string[];    
    EDep: string;
    EDesc: string;
}

export const EmployeeDataList: EmployeeData[] = [
    {
        Eid: 101,
        EName: "Ritu Bhatt",
        EProfile: "images/image101.png",
        ETitle: "Angular Developer",
        EMail: "ritu.bhatt@example.com",
        EContact: 1234567890,
        Experience: 2,
        ESkills: ["Angular", "TypeScript", "HTML", "CSS"],
        EDep: "IT",
        EDesc: "Experienced software engineer with a strong background in Frontend development."
    },
    {
        Eid: 102,
        EName: "Aarav Patel",
        EProfile: "images/image102.png",
        ETitle: "Backend Developer",
        EMail: "aarav.patel@example.com",
        EContact: 9876543210,
        Experience: 3,
        ESkills: ["Node.js", "Express", "MongoDB", "JavaScript"],
        EDep: "IT",
        EDesc: "Backend developer skilled in building scalable APIs and server-side applications."
    },
    {
        Eid: 103,
        EName: "Priya Shah",
        EProfile: "images/image101.png",
        ETitle: "UI/UX Designer",
        EMail: "priya.shah@example.com",
        EContact: 9876501234,
        Experience: 2,
        ESkills: ["Figma", "Adobe XD", "Wireframing", "Prototyping"],
        EDep: "Design",
        EDesc: "Creative designer focused on delivering intuitive and user-friendly interfaces."
    },
    {
        Eid: 104,
        EName: "Karan Mehta",
        EProfile: "images/image102.png",
        ETitle: "Java Developer",
        EMail: "karan.mehta@example.com",
        EContact: 9123456780,
        Experience: 4,
        ESkills: ["Java", "Spring Boot", "SQL", "REST API"],
        EDep: "IT",
        EDesc: "Java developer experienced in developing robust enterprise applications."
    },
    {
        Eid: 105,
        EName: "Neha Desai",
        EProfile: "images/image101.png",
        ETitle: "QA Engineer",
        EMail: "neha.desai@example.com",
        EContact: 9988776655,
        Experience: 2,
        ESkills: ["Manual Testing", "Selenium", "JIRA", "Test Cases"],
        EDep: "Quality Assurance",
        EDesc: "Quality assurance engineer with experience in testing web applications."
    },
    {
        Eid: 106,
        EName: "Dev Shah",
        EProfile: "images/image102.png",
        ETitle: "Python Developer",
        EMail: "dev.shah@example.com",
        EContact: 9090909090,
        Experience: 3,
        ESkills: ["Python", "Django", "MySQL", "REST API"],
        EDep: "IT",
        EDesc: "Python developer focused on backend development and database integration."
    },
    {
        Eid: 107,
        EName: "Anjali Joshi",
        EProfile: "images/image101.png",
        ETitle: "HR Executive",
        EMail: "anjali.joshi@example.com",
        EContact: 9898989898,
        Experience: 2,
        ESkills: ["Recruitment", "Communication", "HR Management", "Payroll"],
        EDep: "HR",
        EDesc: "HR professional experienced in recruitment, employee engagement, and HR operations."
    },
    {
        Eid: 108,
        EName: "Rahul Verma",
        EProfile: "images/image102.png",
        ETitle: "Full Stack Developer",
        EMail: "rahul.verma@example.com",
        EContact: 9345678120,
        Experience: 5,
        ESkills: ["React", "Node.js", "MongoDB", "Express"],
        EDep: "IT",
        EDesc: "Full stack developer with experience building responsive web applications."
    },
    {
        Eid: 109,
        EName: "Sneha Trivedi",
        EProfile: "images/image101.png",
        ETitle: "Data Analyst",
        EMail: "sneha.trivedi@example.com",
        EContact: 9765432108,
        Experience: 3,
        ESkills: ["Excel", "SQL", "Power BI", "Python"],
        EDep: "Analytics",
        EDesc: "Data analyst skilled in transforming data into actionable business insights."
    },
    {
        Eid: 110,
        EName: "Vishal Parmar",
        EProfile: "images/image102.png",
        ETitle: "DevOps Engineer",
        EMail: "vishal.parmar@example.com",
        EContact: 9012345678,
        Experience: 4,
        ESkills: ["Docker", "AWS", "Jenkins", "Git"],
        EDep: "IT",
        EDesc: "DevOps engineer experienced in automation, deployment, and cloud infrastructure."
    }
]