const FormContainer = props => {
  const { children } = props;
  return (
    <div className="flex w-full">
      <div className="relative hidden md:flex">
        <img
          src="https://static-task-assets.react-formula.com/capstone_sign_in_scene.png "
          className="h-screen object-cover "
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-green-800/20"></div>
      </div>

      <div className="flex flex-col justify-center items-center h-screen bg-green-50 flex-1">
        <div className=" flex flex-col items-center mx-2 my-8">
          <img
            src="https://static-task-assets.react-formula.com/capstone_logo_dark.png"
            className="w-16 mb-2"
          />
          <div className="text-3xl font-playfair text-emerald-700">
            Rica's Plants
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
export default FormContainer;
