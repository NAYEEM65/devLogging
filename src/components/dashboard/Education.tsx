import { Button, Table } from "antd";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteEducation } from "../../actions/profile";
const { Column } = Table;

interface IEducation {
  education: Array<any>;
  deleteEducation: Function;
}
const Education = ({ education, deleteEducation }: IEducation) => {
  return (
    <div>
      <h2 className="my-2">Education Qualifications</h2>
      <Table
        dataSource={education}
        pagination={false}
        className="overflow-x-auto"
      >
        <Column
          title="School"
          dataIndex="school"
          key="school"
          responsive={["xs", "sm", "md"]}
        />
        <Column
          title="Degree"
          dataIndex="degree"
          key="degree"
          responsive={["xs", "sm", "md"]}
        />
        <Column
          title="Field Of Study"
          dataIndex="fieldofstudy"
          key="fieldofstudy"
          responsive={["xs", "sm", "md"]}
        />
        <Column
          title="From"
          dataIndex="from"
          key="from"
          responsive={["xs", "sm", "md"]}
          render={(from) => <Moment format="YYYY/MM/DD">{from}</Moment>}
        />
        <Column
          title="To"
          dataIndex="to"
          key="to"
          responsive={["xs", "sm", "md"]}
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
          responsive={["xs", "sm", "md"]}
          render={(_id: any) => (
            <Button danger onClick={() => deleteEducation(_id)}>
              Delete
            </Button>
          )}
        />
      </Table>
    </div>
  );
};

export default connect(null, { deleteEducation })(Education);
