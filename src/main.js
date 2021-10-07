const MyCV = {
  data() {
    return {
      loc: {
        avatar_url: "./img/my_photo2.jpg",
        current_date: "© 2021",
        fullname: "Protsaenko Olga",
        job_title: "Front-End developer",
        contacts_block_name: "Contact Info",
        proSkills_block_name: "Professional skills",
        personalSkills_block_name: "Personal skills",
        lang_block_name: "Languages",
        experience_section_name: "Experience",
        educ_section_name: "Education",
        educ_title: "ITMO University",
        cert_section_name: "Certifications",
        code_section_name: "Code examples",
        lang_content: "English — Upper Intermediate",
        contacts_phone: "+7(950)0460942",
        contacts_email: "protsaenko@gmail.com",
        link_github: "https://github.com/protsaenko",
        link_linkedin: "https://www.linkedin.com/in/olga-protsaenko-667541b3/",
        link_telegram: "https://t.me/Protsa",
        alias_github: "protsaenko",
      },
      proSkills: [
        { skill: "JavaScript", value: 40 },
        { skill: "HTML", value: 50 },
        { skill: "CSS", value: 40 },
        { skill: "PowerShell", value: 30 },
        { skill: "MySQL", value: 50 },
        { skill: "Microsoft Office", value: 60 },
        { skill: "VOIP", value: 60 },
        { skill: "DNS", value: 50 },
        { skill: "GIT", value: 40 },
        { skill: "Adobe Illustrator", value: 40 },
        { skill: "JIRA/Confluence", value: 50 },
      ],
      personalSkills: [
        { skill: "Teamwork and Collaboration" },
        { skill: "Active Listening" },
        { skill: "Written and Verbal Communication" },
        { skill: "Making test cases" },
      ],
      experiencies: [
        {
          title: "Application support Engineer",
          company: {
            name: "Intermedia",
            link: "www.intermedia.com",
          },
          date: "June 2017 — October 2020",
          list_items: [
            {
              item: "Provided IT support services and troubleshooting for English-speaking customers via phone calls, e-mail and chat",
            },
            {
              item: "Processed customer requests for issues with Exchange and VOIP services",
            },
            {
              item: "Improved monitoring and support for internal applications by creating C# tools, Kibana watchers, Powershell scripts",
            },
            {
              item: "Supported internal database with MySQL requests and Active Directory",
            },
            {
              item: "Wrote educational articles about company products and supported internal Wiki",
            },
          ],
        },
        {
          title: "Support Engineer",
          company: {
            name: "Lanck Telecom",
            link: "www.lancktele.com",
          },
          date: "January 2014 — April 2014",
          list_items: [
            {
              item: "Processed requests from IP telephony operators",
            },
            {
              item: "Checked quality of communication with test calls to different countries",
            },
          ],
        },
      ],
      educations: [
        {
          date: "2010 - 2014",
          description: [
            {
              item: "Faculty of Computer Technologies and Control",
            },
            {
              item: "Bachelor degree of Information technology and computer engineering",
            },
          ],
        },
        {
          date: "2015",
          description: [
            { item: "Faculty of Software Engineering and Computer Systems" },
            {
              item: "Computer Graphics and Design",
            },
          ],
        },
      ],
      certifications: [
        { item: "Certified for CompTIA Network+ (September 2019)" },
        {
          item: "Passed the accreditation test for Networking 4 Voice and Video over IP - SSVVP (December 2018)",
        },
        {
          item: "Passed the accreditation test for SSCA® SIP training (December 2018)",
        },
        {
          item: "Certified for Microsoft Office Specialist for Office Outlook 2013 (December 2017)",
        },
        {
          item: "Certified for Effective Service and Communication by Green Key (August 2017)",
        },
      ],
      codes: [
        {
          link: "https://github.com/protsaenko/JS-code-examples",
          text: "JavaScript exercises and snippets",
        },
      ],
    };
  },
};

Vue.createApp(MyCV).mount("#mycv");

//{{ loc.avatar_url }}
// " },\n{ item: "
