const Tbody = ({ name, email, type, status }) => {
  return (
    <tbody>
      <tr>
          <td className="border px-4 py-2">{name}</td>
          <td className="border px-4 py-2">{email}</td>
          <td className="border px-4 py-2">{type}</td>
          <td className="border px-4 py-2">{status}</td>
      </tr>
    </tbody>
  );
};

export default Tbody;