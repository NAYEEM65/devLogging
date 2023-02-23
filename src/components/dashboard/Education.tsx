import { Button, Table } from "antd";
import Moment from "react-moment";
const { Column } = Table;

interface IEducation {
  education: Array<any>;
}
const Education = ({ education }: IEducation) => {
  return (
    <div>
      <h2 className="my-2">Education Qualifications</h2>
      <Table dataSource={education} pagination={false}>
        <Column
          title="School"
          dataIndex="school"
          key="school"
          responsive={["md"]}
        />
        <Column
          title="Degree"
          dataIndex="degree"
          key="degree"
          responsive={["md"]}
        />
        <Column
          title="Field Of Study"
          dataIndex="fieldofstudy"
          key="fieldofstudy"
          responsive={["md"]}
        />
        <Column
          title="From"
          dataIndex="from"
          key="from"
          responsive={["md"]}
          render={(from) => <Moment format="YYYY/MM/DD">{from}</Moment>}
        />
        <Column
          title="To"
          dataIndex="to"
          key="to"
          responsive={["md"]}
          render={(to) => (
            <span
              className={`${
                to === null
                  ? "bg-green-500 text-white rounded p-1 font-medium"
                  : ""
              }`}
            >
              {to === null ? "Now" : <Moment format="YYYY/MM/DD">{to}</Moment>}
            </span>
          )}
        />
        <Column
          title="Action"
          dataIndex="_id"
          key="action"
          responsive={["md"]}
          render={(_id: any) => (
            <Button danger onClick={() => console.log(_id)}>
              Delete
            </Button>
          )}
        />
      </Table>
    </div>
  );
};

export default Education;
