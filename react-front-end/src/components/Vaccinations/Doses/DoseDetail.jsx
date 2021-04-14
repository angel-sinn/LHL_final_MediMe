import { Link } from "react-router-dom";
import BackButton from "../../BackButton";
import IconButton from "../../IconButton";
import "./DoseDetail.scss";

const vaccinations = [
  {
  id: 1,
  user_id: 1,
  name: "Pfizer-BioNTech COVID-19",
  total_num_doses: 2
  },
  {
  id: 2,
  user_id: 1,
  name: "MMR Priorix",
  total_num_doses: 2
  }
]

const doses = [
  {
  id: 1,
  vaccination_id: 1,
  serial_number: "SB22S987NOW",
  date_taken: "2021-03-15T07:00:00.000Z",
  administration_site: "Sunset Community Centre",
  next_scheduled_dose: "2021-09-01T07:00:00.000Z"
  },
  {
  id: 2,
  vaccination_id: 2,
  serial_number: "AS8D7XX2LZK",
  date_taken: "2020-05-29T07:00:00.000Z",
  administration_site: "Cross Walk-In Clinic",
  next_scheduled_dose: null
  },
  {
  id: 3,
  vaccination_id: 2,
  serial_number: "KS3K9XZLZLK",
  date_taken: "2019-12-18T08:00:00.000Z",
  administration_site: "Safeway Pharmacy at Granville",
  next_scheduled_dose: "2020-05-29T07:00:00.000Z"
  }
];


export default function DoseDetail() {
  const vaccinationDetail = 2; //change this with useContext data
  const vaccination = vaccinations.find(v => v.id === vaccinationDetail);

  const doseDetail = 3; //change this with useContext data
  const dose = doses.find(d => d.id === doseDetail);
  
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
  
    return date.toDateString();
  };
  

  const onDelete = () => {
    console.log('Delete button pressed');
  };

  const onEdit = () => {
    console.log('Edit button pressed');
  };

  return (
    <section className="dose-detail">
      <div className="dose-detail--icons">
        <BackButton />
      </div>
      <h1 className="dose-detail--title">Vaccination Dose Detail</h1>

      <div className="dose-detail--container">
        <div className="dose-detail--data">
          <h5 className="form-label">Vaccination Name:</h5>
          <p className="form-body">
            {vaccination && vaccination.name}
          </p>
        </div>
        <div className="dose-detail--data">
          <h5 className="">Date:</h5>
          <p className="form-body">{dose && formatDate(dose.date_taken)}</p>
        </div>
        <div className="dose-detail--data">
          <h5 className="">Administration Site:</h5>
          <p className="form-body">{dose && dose.administration_site}</p>
        </div>
        <div className="dose-detail--data">
          <h5 className="">{dose.next_scheduled_dose ? 'Next Scheduled Dose:' : 'No Future Dose Scheduled.'}</h5>
          <p className="form-body">{dose && formatDate(dose.next_scheduled_dose)}</p>
        </div>
      </div>

      <div className="clinic-detail--user-action">
        <IconButton
          delete
          variant="outlined"
          color="secondary"
          onClick={onDelete}
        >
          Delete
        </IconButton>
        {/* <Link to="/dose/edit"> */}
          <IconButton
          edit
          variant="contained"
          color="secondary"
          onClick={onEdit}
          // onClick={() => handleDoseEditClick(dose.id)}
          >
          Edit
        </IconButton>
      {/* </Link> */}
      </div>
    </section>
  );
};