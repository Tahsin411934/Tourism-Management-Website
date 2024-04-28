import { useLoaderData } from "react-router-dom";
import ShowMyAddedList from "./ShowMyAddedList";

const MyListPage = () => {

    const MyAddedList = useLoaderData();
    console.log(MyAddedList)
    return (
        <div className="container mx-auto">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {
                        MyAddedList.map(item => <ShowMyAddedList key={item._id} myAddedSpot={item}></ShowMyAddedList>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyListPage;