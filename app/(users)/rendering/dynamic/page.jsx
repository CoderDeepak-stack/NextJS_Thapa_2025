import { db1 } from "@/config/db1.jsx";
import {cache} from 'react';
// test on 7 july 2025 by using ssh key

// test 
export const dynamic = 'force-dynamic';

const DynamicPage = async () => {

  const patients = await getAllPatients()



  return (
    <>
      <p>Total patients: {patients.length}</p>
      <PatientLists patients={patients} />
    </>
  );
};

export default DynamicPage;

const PatientLists = async () => {
  const patients = await getAllPatients()
  return (
    <>
      <div className="flex justify-center align-middle">

        <ul className="bg-sky-300 border-2 border-red border-dashed">
          {patients.map((data) => {
            return (
              <>
                <li key={data.id}>{data.id}, {data.name} , Age {data.age} , {data.gender} , Diseases = {data.disease}</li>

              </>
            )
          })}
        </ul>
      </div>
    </>
  )
}

const getAllPatients =  cache( async () => {
  const [patients] = await db1.execute("Select * from patients");
  console.log('fetching patients')
  return patients;
})