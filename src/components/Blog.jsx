import Data from "./../../api/blogsData.json";
import { useState } from "react";

const Blog = () => {
  const [noOfPost, setNoOfPost] = useState(16);
  const [initialPost, setInitialPost] = useState(0)
  const [page, setPage] = useState(1)
  console.log(Data.length);
  const totalPost = Data.length;

  const nextPage = () => {
    if (noOfPost > totalPost) {
      return;
    }
    setInitialPost (initialPost + 16);
    setNoOfPost (noOfPost + 16);
    setPage(page+1);
}
const prevPage = () => {
  if (initialPost <= 0) {
    return;
  }
  setInitialPost (initialPost - 16);
  setNoOfPost (noOfPost - 16);
  setPage(page-1);
}


  return (
    <div>
    <div className="sm:m-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 mg:grid-cols-3 w-full justify-around">
      {Data.slice(initialPost,noOfPost).map((blog) => (
        <div
          key={blog.id}
          className=" max-w-sm rounded m-2 overflow-hidden shadow-lg"
        >
          <img className="w-full" src={blog.image} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{blog.title}</div>
            <p className="text-gray-700 text-base">{blog.author}</p>
            <p className="text-gray-700 text-base">{blog.published_date}</p>
          </div>
        </div>
      ))}
      </div>
      <div className="flex justify-center semibold text-xl text-slate-50">
      <button className="bg-purple-500 rounded-md p-2 px-4 m-6 " onClick={prevPage}> Previous</button>
      <button className="bg-purple-500 rounded-md p-2 px-4 m-6 " onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};

export default Blog;
