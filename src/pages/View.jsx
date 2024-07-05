import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const View = () => {
  const { userPlan, setLoading } = useContext(AuthContext);
  const [seriesData, setSeriesData] = useState([]);
  const [googleId, setGoogleId] = useState("");
  const [taskId, setTaskId] = useState("");

  console.log("google and task id", googleId, taskId);
  console.log('user plan', userPlan)
  console.log("seried data", seriesData);

  useEffect(() => {
    const fetchSeriesData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND}/series_info?email=${userPlan?.email}`
        );
        setSeriesData(response?.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSeriesData();
  }, [userPlan?.email]);

  const handleConnectYoutube = (item) => {
    console.log("item inside youtube connect", item._id);
    sessionStorage.setItem("taskId", item._id);
    window.location.href = `${import.meta.env.VITE_BACKEND}/connect_youtube`;
  };

  const handleOnlyConnectYoutube = (item) => {
    console.log("item inside youtube connect", item._id);
    sessionStorage.setItem("taskId", item._id);
    window.location.href = `${import.meta.env.VITE_BACKEND}/connect_youtube`;
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const updateGoogleIdInDB = async () => {
      // Extracting googleId from URL
      const params = new URLSearchParams(window.location.search);
      const googleIdFromUrl = params.get("googleId");
      if (googleIdFromUrl) {
        setGoogleId(googleIdFromUrl);
        console.log("Google ID:", googleIdFromUrl);
        window.history.replaceState(null, null, window.location.pathname);
      }

      const taskIdFromStorage = sessionStorage.getItem("taskId");
      if (taskIdFromStorage) {
        setTaskId(taskIdFromStorage);
        console.log("Task ID from session storage:", taskIdFromStorage);
      }

      if (googleIdFromUrl && taskIdFromStorage) {
        try {
          const response = await axios.patch(
            `${
              import.meta.env.VITE_BACKEND
            }/googleId?taskId=${taskIdFromStorage}`,
            {
              googleId: googleIdFromUrl,
            }
          );
          console.log("Server response for patch:", response?.data);
        } catch (error) {
          console.error("Error making PATCH request:", error);
        }
      }
    };
    updateGoogleIdInDB();
  }, []);

  const handleScheduleVideo = async (item) => {
    console.log(item, item._id);
    if (!googleId) {
      alert("Connect a google account for the series.");
      return;
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND}/scheduled_video`,
        {
          email: userPlan?.email,
          seriesId: item._id,
          postADay: 1,
          googleId,
        }
      );
      console.log(response?.data);
      alert(`${response?.data?.message}`);
    } catch (error) {
      alert(`${error}`);
      console.error(error);
    }
  };

  // const handlePostVideo = async (item) => {
  //   if(!googleId){
  //     alert("Connect a youtube account first")
  //     return
  //   }
  //   try {
  //     const response = await axios.post(`${import.meta.env.VITE_BACKEND}/generate_video`, {
  //       email: userPlan?.email,
  //       seriesId: item._id,
  //      });
  //     console.log(response?.data);
  //     alert(`${response.data}`)
  //   } catch (error) {
  //     console.error(error);
  //     alert(`${error}`)
  //   }

  // };
  
  const handleUploadVideo = async () => {
    if(!googleId){
      alert("Connect a youtube account first")
      return
    }

    const testData  = {
      cloudinaryUrl:"https://res.cloudinary.com/dj3qabx11/video/upload/v1715665933/w0jitr3qgelawxze5chz.mp4",
      
      thumbnail:  "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
      tags: ["test0", "test0", "test0"],
      description: "This is a sample description for the video.", 
      title: "Sample Video Title 10",googleId


      // scheduleDateTime: "2024-05-28T10:00:00Z",
      // videoLink: "https://res.cloudinary.com/dj3qabx11/video/upload/v1715665933/w0jitr3qgelawxze5chz.mp4",
      // title: "Sample Video Title",
      // thumbnailUrl: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
      // tags: ["test1", "test2", "test3"],
      // description: "This is a sample description for the video.",
      // email: userPlan?.email
    };

    console.log('tastData', testData)
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND}/upload_video`, testData);
      console.log(response?.data);
      alert(`${response?.data?.message}: for google id: ${response?.data?.googleId}. The video id is ${response?.data?.videoId}`)
    } catch (error) {
      console.error(error);
      alert(`${error}`)
    }

  };

  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="text-2xl font-bold text-black pb-3">YOUR CHANNELS</h1>
      <div className="pb-10">
        <hr className="h-[3px] bg-black " />
        <button className="py-2 px-4 bg-yellow-400 text-black font-bold text-center " onClick={handleUploadVideo}>Test upload Single video</button>
      </div>
      <div className="pb-10">
        <hr className="h-[3px] bg-black " />
        <button className="py-2 px-4 bg-yellow-400 text-black font-bold text-center " onClick={()=> handleOnlyConnectYoutube(userPlan?._id)}>Connect Youtube Account</button>
        {
          googleId ? (
            <p>Your google Id for youtube upload is : {googleId}</p>
          ) : (
            <p>You did not connected any youtube account.</p>
          )
        }
      </div>

      {seriesData?.length > 0 ? (
        seriesData?.map((item) => (
          <div
            className="mt-10 p-8 w-full rounded-lg bg-slate-600"
            key={item?._id}
          >
            <p className="text-lg text-white">
              <span className="font-bold">Channel Name:</span> {item?.content}
            </p>
            <p className="text-lg text-white">
              <span className="font-bold">Language:</span> {item?.language}
            </p>
            <p className="text-lg text-white">
              <span className="font-bold">Video Duration: </span>{" "}
              {item?.duration}
            </p>
            <p className="text-lg text-white">
              <span className="font-bold">Narrator: </span> {item?.narrator}
            </p>
            <p className="text-lg text-white pb-10">
              <span className="font-bold">Send Type: </span> {item?.destination}
            </p>
            <div className="flex justify-start items-center gap-10 flex-col md:flex-row">
              <button
                className="block bg-gradient-to-r from-primary to-blue-700 text-white py-3 px-6 text-lg rounded-lg font-semibold "
                onClick={() => handleConnectYoutube(item)}
              >
                CONNECT YOUTUBE ACCOUNT
              </button>
              <button
                className="bg-gradient-to-r block from-primary to-blue-700 text-white py-3 px-6 text-lg rounded-lg font-semibold "
                onClick={() => handleScheduleVideo(item)}
              >
                SCHEDULE VIDEO
              </button>
              {/*<button className='bg-gradient-to-r block from-primary to-blue-700 text-white py-3 px-6 text-lg rounded-lg font-semibold '
          onClick={() => handlePostVideo(item)}
       >POST A VIDEO</button>*/}
            </div>
          </div>
        ))
      ) : (
        <div className="p-8 w-full rounded-lg bg-slate-600">
          <p className="text-white pb-8">
            You haven't started a Faceless Video channel yet.
          </p>

          <Link to="/dashboard/create">
            <button className="bg-gradient-to-r from-primary to-blue-700 text-white py-3 px-6 text-lg rounded-lg font-semibold mb-5">
              CREATE YOUR CHANNEL
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default View;
