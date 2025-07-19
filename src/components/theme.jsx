const Theme = ({ title, Icon }) => {
  return (
    <div className='flex flex-row gap-2 p-2 w-full cursor-pointer items-center text-xl border border-blue-700 font-semibold'>
        <div>{Icon && <Icon />}</div>
        <div>{title}</div>
    </div>
  );
};

export default Theme;