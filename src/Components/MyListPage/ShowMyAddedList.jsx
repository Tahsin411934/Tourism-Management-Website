

const ShowMyAddedList = ({myAddedSpot}) => {
    console.log(myAddedSpot)
    return (
        <tbody>
      <tr>
        
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td>
            <div className="flex gap-3">
                <button> btn</button>
                <button> btn</button>
                <button> btn</button>
            </div>
        </td>
      </tr>
   
    </tbody>
    );
};

export default ShowMyAddedList;