import AnaImg from '../../assets/chart.svg';

const ClientList = ({ clients, deleteClient, handle }) => {
  console.log("client list =", clients);
  return (
    <div className="max-w-4xl lg:min-h-[620px] mx-auto mt-8 lg:mt-0 text-white bg-gray-800 p-6 rounded-xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">All Clients</h2>
        <div className="flex items-center gap-4">
          <div className="flex justify-center items-center w-8 h-8 bg-gray-700 rounded-full">
            {clients.length}
          </div>
          <button onClick={handle} aria-label="Analytics">
            <img src={AnaImg} alt="Analytics Icon" className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Table */}
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="py-3 px-4 text-lg font-semibold">Domain</th>
            <th className="py-3 px-4 text-lg font-semibold">Code</th>
            <th className="py-3 px-4 text-lg font-semibold text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.length > 0 ? (
            clients.map((client, index) => (
              <tr key={index} className="border-b border-gray-700 hover:bg-gray-700 transition duration-150">
                <td className="py-3 px-4">{client.domain}</td>
                <td className="py-3 px-4">{client.code}</td>
                <td className="py-3 px-4 text-center">
                  <button
                    onClick={() => deleteClient(client.code)}
                    className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition duration-150"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="py-8 text-center text-gray-500">
                No clients added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ClientList;
