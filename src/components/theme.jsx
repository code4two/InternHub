const Theme = ({ title, Icon }) => {
  return (
    <div className='flex flex-row gap-2 py-3 px-2 lg:px-4 w-full cursor-pointer items-center text-xl border border-blue-700 font-semibold'>
        <div>{Icon && <Icon />}</div>
        <div>{title}</div>
    </div>
  );
};

export default Theme;