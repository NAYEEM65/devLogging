import React, { FC, ReactElement } from "react";
interface IExperience {
  experience: object;
}
const Experience = ({ experience }: IExperience) => {
  console.log(experience);
  return (
    <div>
      <h2 className="my-2">Experience</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hidden md:visible">Title</th>
            <th className="hidden md:visible">Years</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Experience;
