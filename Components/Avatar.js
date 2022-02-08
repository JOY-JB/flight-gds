const Avatar = ({ image }) => {
  return (
    <div className="avatar">
      <div className="rounded-full w-10 h-10 m-1">
        <img src={image} />
      </div>
    </div>
  );
};

export default Avatar;
