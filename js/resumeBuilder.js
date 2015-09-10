// All objects

var bio = {
    "name": "Hary Selman",
    "role": "Front-end Developer",
    "contacts": {
        "email": "hary.selman@gmail.com",
        "mobile": "+31 6 2000 6102",
        "github": "hary selman",
        "twitter": "hary selman",
        "location": "Amsterdam"
    },
    "welcomeMessage": "planets yell with sonic shower! ",
    "skills": ["awesomeness", " delivering things", " creating things", "creative"],
    "pictureUrl": "images/me.jpg"
};

var work = {
    "jobs": [
        {
            "employer": "Verne insurance solutions",
            "title": "Solution architect",
            "dates": "August 2013 - Current",
            "location": "Culemborg",
            "description": "Solution Architect responsible for leading the design of IT solutions in the insurance industry. Verne delivers insurance solutions to the financial industry and has its platform running in over 22 countries. More recently Verne has extended its product range with a travel insurance specific brokerage platform, data-integration hub and with a unique forms engine based on REST API’s for managing integrations."
        },
        {
            "employer": "GlobalOrange",
            "title": "IT Project manager",
            "dates": "August 2012 - June 2013",
            "location": "Amsterdam",
            "description": "Leading the application development and support of Kroodle. Kroodle is a new insurance label of insurer Aegon which is focused on giving clients improved user experience and engaging clients using social media."
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": " Sample project 1",
            "dates": "2015",
            "description": "Luras mori, tanquam barbatus bubo. Sunt brodiumes promissio fatalis, mirabilis bullaes. Ecce, clemens magister! Lumen de bassus absolutio, examinare itineris tramitem! Albus, varius eleatess sensim gratia de regius, placidus gallus.",
            "images": ["http://symetris.ca/sites/default/files/Project_Kick-off.jpg", "http://www.thinktankconsulting.ca/img/pmconsultingpage.jpg"]
        },
        {
            "title": " Sample project 2",
            "dates": "2014",
            "description": "It is a fantastic wind, sir. Queen of a brave wind, imitate the plasma! Dead admirals, to the galaxy. X-ray vision at the ready room was the flight of voyage, handled to a neutral crew.",
            "images": ["http://symetris.ca/sites/default/files/Project_Kick-off.jpg", "http://www.thinktankconsulting.ca/img/pmconsultingpage.jpg"]
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "Damstede",
            "location": "Amsterdam",
            "degree": "Pre University High School",
            "majors": ["Beta", "Economics"],
            "graduation": "2000"
        },
        {
            "name": "Technische Universiteit Delft",
            "location": "Delft",
            "degree": "MSc",
            "majors": ["Systems engineering", "Policy analysis", "Management"],
            "graduation": "2006"
        }
    ]
    ,
    "onlineCourses": [
        {
            "title": "Front-end webdeveloper",
            "school": "Udacity",
            "dates": "2015",
            "url": "http://udacity.com"
        }
    ]
};


// all functions encapsulated in relevant objects

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    var formattedpictureUrl = HTMLbioPic.replace("%data%",bio.pictureUrl);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedpictureUrl);
    $("#header").append(formattedWelcomeMessage);

    var arrayOfContactInfo = Object.getOwnPropertyNames(bio.contacts); // this returns an array of property names under bio.contacts. e.g. ["email", "mobile", "github", "twitter", "location"]

    // code below turns bio.contacts in an array of property values to determine the length of the array
    var bioContactsArray = [];
        for (contactItem in bio.contacts) {
            bioContactsArray.push(bio.contacts[contactItem]);
        }

    // code below iterates through the contacts properties and binds them to the page using HTMLcontactGeneric var in helper.js
    if (bioContactsArray.length > 0) {
        for (infoKey in arrayOfContactInfo){
            var formattedContactInfo = HTMLcontactGeneric.replace("%contact%", arrayOfContactInfo[infoKey]);
            var formattedContactInfo = formattedContactInfo.replace("%data%", bio.contacts[arrayOfContactInfo[infoKey]]);
            $("#topContacts").prepend(formattedContactInfo);
            $("#footerContacts").prepend(formattedContactInfo);
        }
    }

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (skill in bio.skills) {
            var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
            $("#skills").append(formattedSkills);
        }
    }
};


work.display = function () {
    if (work.jobs.length > 0) {
        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + " " + formattedWorkTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedWorkDate);

            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedWorkLocation);

            var formattedWorkDdescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedWorkDdescription);
        }
    }
};

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);
        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
};

education.display = function() {
    if (education.schools.length > 0) {
        for (school in education.schools) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolTitle = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedSchoolTitle = formattedSchoolTitle + HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            $(".education-entry:last").append(formattedSchoolTitle);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].graduation);
            $(".education-entry:last").append(formattedSchoolDates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            $(".education-entry:last").append(formattedSchoolLocation);
            for (major in education.schools[school].majors) {
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
                $(".education-entry:last").append(formattedSchoolMajor);
            }
        }
    }
    if (education.onlineCourses.length > 0) {
        for (course in education.onlineCourses) {
            $("#education").append(HTMLonlineClasses);
            // didn't bother with styling page to align with other page element. Doesn't look very pretty,
            // but more focused on learning JS in this project. In previous project I did a lot of effort to make css look good on the page so I passed with excellence on P1
            var formattedCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            var formattedCourseTitle = formattedCourseTitle + HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            $("#education").append(formattedCourseTitle);
            var formattedCourseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            $("#education").append(formattedCourseDates);
            var formattedCourseURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            $("#education").append(formattedCourseURL);
        }
    }
};

// Calling all the functions to show data

work.display();
bio.display();
projects.display();
education.display();

/*function inName(name) {
 var splitName = name.trim().split(" ");
 var firstNameWithoutFirstLetter = splitName[0].slice(1);
 var firstNameLetter = splitName[0].slice(0,1).toUpperCase();
 var firstName = firstNameLetter + firstNameWithoutFirstLetter;
 var lastName = splitName[1].toUpperCase();
 return firstName + " " + lastName;;
 }

 inName("hary Selman");

 $("#main").append(internationalizeButton);*/

// Google maps code

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

function locationizer(work_obj) {
    var locationArray = [];

    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

$("#mapDiv").append(googleMap);








