var formattedName = HTMLheaderName.replace("%data%", "Prabhat Panda");
$("#header").append(formattedName);

var formattedBio = HTMLheaderRole.replace("%data%", "Web-Developer");
$("#header").append(formattedBio);

var formattedBioPic = HTMLbioPic.replace("%data%", "images/fry.jpg")
$("#header").append(formattedBioPic);

$("#header").append(HTMLskillsStart);
var skills = ["Quick learner", " Positive attitide", ];

var formattedSkils = HTMLskills.replace("%data%", skills)
$("#header").append(formattedSkils);

var bio = 
{
	"Name" : "Prabhat Panda",
	"Role" : "Web-Developer",
	"Contacts" : 
	{
	"Mobile" : "7666081768",
	"Mail" : "prabhat.panda57@gmail.com",
	"GitHub" : "93prabhat93",
	"Location" : "Santacruz, Mumbai"
	} 
	
}
	
var formattedMobile = HTMLmobile.replace("%data%", bio.Contacts.Mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.Contacts.Mail);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.Contacts.GitHub);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.Contacts.Location);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedLocation);





var education = 
{
	"Schools" :[
	{
	"Name" : "K.E.S high school",
	"Location" : "Kalina ,Santacruz (E),Mumbai",
	"Degree" : "SSC",
	"Year" : "2009"
	},
	{
	"Name" : "Guru Nanak Khalsa college",
	"Location" : "Maheshwari Udyan , Matunga (E), Mumbai",
	"Degree" : "HSC",
	"Year" : "2011"
	},
	{
	"Name" : "Shah & Anchor Engineering College",
	"Location" : "W.T Patil Marg, Chembur, Mumbai",
	"Degree" : "BE-I.T.",
	"Year" : "2015"
	}
	]
}

for (school in education.Schools)
{
	$("#education").append(HTMLschoolStart);

	var formattedSchoolName = HTMLschoolName.replace("%data%", education.Schools[school].Name);
	$(".education-entry:last").append(formattedSchoolName);

	var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.Schools[school].Degree);
	$(".education-entry:last").append(formattedSchoolDegree);

	var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.Schools[school].Location);
	$(".education-entry:last").append(formattedSchoolLocation);

	var formattedSchoolYear = HTMLschoolDates.replace("%data%", education.Schools[school].Year);
	$(".education-entry:last").append(formattedSchoolYear);
}

var work = 
{
	"Jobs" :[
	{
	"Employer" : "AJACKUS",
	"Title" : "Web Developer",
	"Year" : "19th October 2015 - Till Present",
	"Location" : "Prathamesh Residency, Dadabhai Rd,Andheri West, Mumbai, Maharashtra 400058",
	"Description" : "Ajackus is a Web-Development company which builds and maintains websites for all types of devices." 
	},
	]
}

for (job in work.Jobs)
{
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.Jobs[job].Employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.Jobs[job].Title);
	var formattedYear = HTMLworkDates.replace("%data%", work.Jobs[job].Year);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.Jobs[job].Description);

	var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedYear + formattedDescription;
	$(".work-entry:last").append(formattedEmployerTitle);

}

var projects = 
{
	"Projects" : [
	{
	"Title" : "Intro to HTML and CSS with ud304",
	"Dates" : "20/10/2015",
	"Description" : "A basic Html and Css course along with the use of bootstrap.",
	"Images" : ["images/fry.jpg"]
	},
	{
	"Title" : "Git and GitHub",
	"Dates" : "23/10/2015",
	"Description" : "A course on uses and functionalities of Git and Github.",
	"Images" : ["images/fry.jpg"]
	}
	]
}


for (project in projects.Projects)
{
	$("#projects").append(HTMLprojectStart);

	var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.Projects[project].Title);
	$(".project-entry:last").append(formattedProjectTitle);

	var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.Projects[project].Dates);
	$(".project-entry:last").append(formattedProjectDates);

	var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.Projects[project].Description);
	$(".project-entry:last").append(formattedProjectDescription);

	if (projects.Projects[project].Images.length > 0)
	{
	for (image in projects.Projects[project].Images)
	{
	var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.Projects[project].Images[image]);
	$(".project-entry:last").append(formattedProjectImage);
	}	
	}	
}

$("#mapDiv").append(googleMap);