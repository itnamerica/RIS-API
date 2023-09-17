import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const trimProgram = program => {
    const { TransportationProgramId, Program, Organization, City, State, Phone } = program;
    return {
        id: TransportationProgramId,
        title: Program,
        organization: Organization,
        city: City,
        state: State,
        phone: Phone //('' + Phone).replace(/\D/g, '').slice(-10),
    };
};

const list = async (request, response) => {
    try {
        const profiles = [
            {
                "TransportationProgramId": "119982",
                "Program": "In-Home Care",
                "Organization": "Aging Excellence - Brunswick",
                "StreetAddress": "113 Pleasant Street",
                "City": "Brunswick",
                "State": "ME",
                "Zip": "04011",
                "County": "Cumberland",
                "Website1": "http://www.seniorsonthego.com/service/senior-transportation-services",
                "Website2": "",
                "Phone": "2077290991",
                "TTY": "",
                "Fax": "2077290944",
                "Email": "",
                "ContactWebPage": "",
                "TypeofTransportation": "Door To Door",
                "Purpose": "Any",
                "AssistanceAvailable": "Steady Arm To Escort Passenger, Help With Mobility Devices, Driver Will Wait With Passenger During Errand Or Appt, Driver Will Come Inside, Help In And Out Of Vehicle",
                "Scheduling": "Rides In Advance",
                "Payment": "Cash, Check, Creditcards",
                "DonationsAccepted": "0",
                "NonTransportationServices": "0",
                "VehiclesUsed": "Car",
                "CostCode": "",
                "PricingStructure": "Hourly rate for under 4 hours is $35 per hour and 4 hours or more the hourly rate is $30 per hour\r\nPrivate pay",
                "ServiceArea": "Brunswick, Bath, Topsham, Wiscasset to Cumberland",
                "DaysTimesAvailable": "24/7",
                "SpecialRequirements": "Must have in-home consultation first.",
                "Eligibility": "Available To The Public, Seniors",
                "PublicNotes": "Not wheelchair accessible, but can accommodate folding wheelchairs.\r\nNeed to do a free consultation to established client.  ",
                "DateVerified": "2019-10-30 00:00:00",
                "PrivateNotes": "Updated: 6/24/2019 Morgan B. \r\nUpdated and Verified 10/30/19 Jane",
                "Sources": "",
                "IsActive": "1",
                "Latitude": null,
                "Longitude": null,
                "Created": "2014-03-27 21:23:25",
                "CreatedBy": "RC2 spreadsheet import",
                "Modified": "2019-10-30 16:49:39",
                "ModifiedBy": "Joe Warren",
                "DisasterTransportation": "1",
                "TypeOfTransportation_CurbToCurb": "0",
                "TypeOfTransportation_DoorToDoor": "1",
                "TypeOfTransportation_FixedRoute": "0",
                "TypeOfTransportation_SharedRides": "0",
                "TypeOfTransportation_EmergencyTransportation": "0",
                "TypeOfTransportation_ParaTransit": "0",
                "Purpose_MedicalOrHealthcare": "0",
                "Purpose_GroceryShopping": "0",
                "Purpose_NecessaryErrands": "0",
                "Purpose_Social": "0",
                "Purpose_Recreation": "0",
                "Purpose_WorkVolunteer": "0",
                "Purpose_Any": "1",
                "Assistance_SteadyArmToEscortPassenger": "1",
                "Assistance_WheelchairLift": "0",
                "Assistance_TransportFoldingWheelchair": "0",
                "Assistance_HelpWithWheelchairs": "0",
                "Assistance_HelpWithSeatbelts": "0",
                "Assistance_HelpWithMobilityDevices": "1",
                "Assistance_HelpWithPackages": "0",
                "Assistance_DriverWillWaitWithPassengerDuringErrandOrAppt": "1",
                "Assistance_PersonalAssistantAvailable": "0",
                "Assistance_PersonalAssistantCaregiverRidesForFree": "0",
                "Assistance_ServiceAnimalsAllowed": "0",
                "Assistance_DriverWillComeInside": "1",
                "Assistance_DriverWillNotComeInside": "0",
                "Assistance_SpecialNeedsAssistance": "0",
                "Assistance_WheelchairAccessible": "0",
                "Assistance_HelpInAndOutOfVehicle": "1",
                "Assistance_FullService": "0",
                "Scheduling_RidesInAdvance": "1",
                "Payment_Cash": "1",
                "Payment_Check": "1",
                "Payment_Medicaid": "0",
                "Payment_Creditcards": "1",
                "Payment_PrePayment": "0",
                "Payment_ExactChange": "0",
                "Payment_TaxiVoucher": "0",
                "Payment_Insurance": "0",
                "Payment_Free": "0",
                "VehiclesUsed_Car": "1",
                "VehiclesUsed_Van": "0",
                "PricingStructure_Free": "0",
                "PricingStructure_Paid": "1",
                "Eligibility_AvailableToThePublic": "1",
                "Eligibility_Age50Plus": "0",
                "Eligibility_Age55Plus": "0",
                "Eligibility_Age60Plus": "0",
                "Eligibility_Age62Plus": "0",
                "Eligibility_Age65Plus": "0",
                "Eligibility_Disabled": "0",
                "Eligibility_Veteran": "0",
                "Eligibility_NativeAmerican": "0",
                "Eligibility_IncomeRequirement": "0",
                "Eligibility_ResidencyRequirement": "0",
                "Eligibility_MembershipRequired": "0",
                "Eligibility_Illness": "0",
                "Eligibility_HomeEvaluation": "0",
                "Eligibility_Seniors": "1",
                "Scheduling_OnDemand": "0",
                "Scheduling_FixedSchedule": "0"
            },
            {
                "TransportationProgramId": "119983",
                "Program": "In-Home Care",
                "Organization": "Aging Excellence - Portland",
                "StreetAddress": "710 Forest Ave",
                "City": "Portland",
                "State": "ME",
                "Zip": "04101",
                "County": "Cumberland",
                "Website1": "http://www.seniorsonthego.com/service/senior-transportation-services",
                "Website2": "",
                "Phone": "2077710991",
                "TTY": "",
                "Fax": "2077710958",
                "Email": "",
                "ContactWebPage": "",
                "TypeofTransportation": "Door To Door",
                "Purpose": "Any",
                "AssistanceAvailable": "Steady Arm To Escort Passenger, Help With Mobility Devices, Driver Will Wait With Passenger During Errand Or Appt, Driver Will Come Inside, Help In And Out Of Vehicle",
                "Scheduling": "Rides In Advance",
                "Payment": "Cash, Check, Creditcards",
                "DonationsAccepted": "0",
                "NonTransportationServices": "0",
                "VehiclesUsed": "Car",
                "CostCode": "",
                "PricingStructure": "Hourly rate. ",
                "ServiceArea": "Cumberland county",
                "DaysTimesAvailable": "24/7",
                "SpecialRequirements": "Must have an in-home consultation first. Must become a client before receiving rides. Transportation is provided as part of the overall home care package.",
                "Eligibility": "Seniors",
                "PublicNotes": "Not wheelchair accessible, but can accommodate folding wheelchairs. They are primarily a home care agency, but caregivers do provide transportation as part of overall home care package.",
                "DateVerified": "2014-11-03 00:00:00",
                "PrivateNotes": "Updated: 6/24/2019 Morgan B. ",
                "Sources": "",
                "IsActive": "1",
                "Latitude": null,
                "Longitude": null,
                "Created": "2014-03-27 21:23:27",
                "CreatedBy": "RC2 spreadsheet import",
                "Modified": "2019-06-24 15:10:12",
                "ModifiedBy": "Joe Warren",
                "DisasterTransportation": "0",
                "TypeOfTransportation_CurbToCurb": "0",
                "TypeOfTransportation_DoorToDoor": "1",
                "TypeOfTransportation_FixedRoute": "0",
                "TypeOfTransportation_SharedRides": "0",
                "TypeOfTransportation_EmergencyTransportation": "0",
                "TypeOfTransportation_ParaTransit": "0",
                "Purpose_MedicalOrHealthcare": "0",
                "Purpose_GroceryShopping": "0",
                "Purpose_NecessaryErrands": "0",
                "Purpose_Social": "0",
                "Purpose_Recreation": "0",
                "Purpose_WorkVolunteer": "0",
                "Purpose_Any": "1",
                "Assistance_SteadyArmToEscortPassenger": "1",
                "Assistance_WheelchairLift": "0",
                "Assistance_TransportFoldingWheelchair": "0",
                "Assistance_HelpWithWheelchairs": "0",
                "Assistance_HelpWithSeatbelts": "0",
                "Assistance_HelpWithMobilityDevices": "1",
                "Assistance_HelpWithPackages": "0",
                "Assistance_DriverWillWaitWithPassengerDuringErrandOrAppt": "1",
                "Assistance_PersonalAssistantAvailable": "0",
                "Assistance_PersonalAssistantCaregiverRidesForFree": "0",
                "Assistance_ServiceAnimalsAllowed": "0",
                "Assistance_DriverWillComeInside": "1",
                "Assistance_DriverWillNotComeInside": "0",
                "Assistance_SpecialNeedsAssistance": "0",
                "Assistance_WheelchairAccessible": "0",
                "Assistance_HelpInAndOutOfVehicle": "1",
                "Assistance_FullService": "0",
                "Scheduling_RidesInAdvance": "1",
                "Payment_Cash": "1",
                "Payment_Check": "1",
                "Payment_Medicaid": "0",
                "Payment_Creditcards": "1",
                "Payment_PrePayment": "0",
                "Payment_ExactChange": "0",
                "Payment_TaxiVoucher": "0",
                "Payment_Insurance": "0",
                "Payment_Free": "0",
                "VehiclesUsed_Car": "1",
                "VehiclesUsed_Van": "0",
                "PricingStructure_Free": "0",
                "PricingStructure_Paid": "0",
                "Eligibility_AvailableToThePublic": "0",
                "Eligibility_Age50Plus": "0",
                "Eligibility_Age55Plus": "0",
                "Eligibility_Age60Plus": "0",
                "Eligibility_Age62Plus": "0",
                "Eligibility_Age65Plus": "0",
                "Eligibility_Disabled": "0",
                "Eligibility_Veteran": "0",
                "Eligibility_NativeAmerican": "0",
                "Eligibility_IncomeRequirement": "0",
                "Eligibility_ResidencyRequirement": "0",
                "Eligibility_MembershipRequired": "0",
                "Eligibility_Illness": "0",
                "Eligibility_HomeEvaluation": "0",
                "Eligibility_Seniors": "1",
                "Scheduling_OnDemand": "0",
                "Scheduling_FixedSchedule": "0"
            }];

        const programs = profiles.map(trimProgram);
        response.header("Access-Control-Allow-Origin", "*").status(200).send(programs);
    } catch (err) {
        return response.status(500).send({ error: 'program fetch failed!' });
    }
};

const get = async (request) => {
    const { id } = request.params;
    // https://blog.logrocket.com/understanding-api-key-authentication-node-js/
    try {
        const profile = await prisma.profile.findUnique({
            where: { id: Number(id) },
        });
        return profile;
    } catch (err) {
        throw boom.boomify(err);
    }
};

const add = async (request) => {
    try {
        const { name, email } = request.body;
        console.log('request.body', request.body);
        console.log('name', name);
        // return true;

        const result = await prisma.profile.create({
            data: {
                name,
                email
            }
        });
        return result;
    } catch (err) {
        throw boom.boomify(err);
    }
};

const update = async (request) => {
    const { name } = request.body;
    try {
        const result = await prisma.profile.create({
            data: {
                name
            },
        });
        return result;
    } catch (err) {
        throw boom.boomify(err);
    }
};

const remove = async (request) => {
    const { id } = request.params;
    try {
        const profile = await prisma.profile.delete({
            where: {
                id: Number(id),
            },
        });
        return profile;
    } catch (err) {
        throw boom.boomify(err);
    }
};

export default { list, get, add, update, remove };