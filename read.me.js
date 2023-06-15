//read me//
//Data Model for Tattoo Artist Website:

//Entities:

//Artist
//Client
//Tattoo Design
//Appointment
//Attributes:

//Artist:
//id(unique identifier)
//name
//email
//phone
//location
//bio
//Client:
//id(unique identifier)
//name
//email
//phone
//Tattoo Design:
//id(unique identifier)
//artist_id(foreign key)
//name
//description
//image_url
//price
//Appointment:
//id(unique identifier)
//artist_id(foreign key)
//client_id(foreign key)
//tattoo_design_id(foreign key)
//date
//time
//status(confirmed, cancelled, pending)
//Relationships:

//Artist can have many Tattoo Designs
//Artist can have many Appointments
//Client can have many Appointments
//Tattoo Design can belong to one Artist
//Appointment can have one Artist, one Client, and one Tattoo Design.//