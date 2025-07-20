const PageBar = ({ title, Icon2 }) => {
  return (
    <div className='flex flex-row mb-3 items-center gap-3 hover:bg-white hover:rounded-xl hover:text-blue-900 p-3 cursor-pointer text-xl font-semibold'>
        <div>{Icon2 && <Icon2 />}</div>
        <div><a href="">{title}</a></div>
    </div>
  ); 
};

export default PageBar;