const Thead = ({ name, email, type, status }) => {
  return (
    <thead className="bg-gray-100">
      <tr>
        <th className="border px-4 py-2 text-left">{name}</th>
        <th className="border px-4 py-2 text-left">{email}</th>
        <th className="border px-4 py-2 text-left">{type}</th>
        <th className="border px-4 py-2 text-left">{status}</th>
      </tr>  
    </thead>
  );
};

export default Thead;