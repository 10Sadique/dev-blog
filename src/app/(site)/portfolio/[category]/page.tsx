const Category = ({ params }: { params: { category: string } }) => {
  return (
    <div>
      <h2 className="font-bold text-xl lg:text-2xl mb-8 capitalize">
        {params.category}
      </h2>
    </div>
  );
};

export default Category;
