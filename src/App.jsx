import "./App.css";

import logo from "./assets/logo.png";
import rightArrow from "./assets/right-arrow.png";
import calendar from "./assets/calendar-plain.png";
import messageQuestion from "./assets/message-question.png";
import notification from "./assets/notification.png";
import profile from "./assets/profile.png";
import arrowDown from "./assets/arrow-down.png";
import category from "./assets/category.png";
import message from "./assets/message.png";
import task from "./assets/task-square.png";
import members from "./assets/profile-2user.png";
import settings from "./assets/setting-2.png";
import addSquare from "./assets/add-square-outline.png";
import greenEllipse from "./assets/green-ellipse.png";
import yellowEllipse from "./assets/yellow-ellipse.png";
import pinkEllipse from "./assets/pink-ellipse.png";
import blueEllipse from "./assets/blue-ellipse.png";
import dots from "./assets/dots.png";
import lampon from "./assets/lamp-on.png";
import edit from "./assets/edit.png";
import link from "./assets/link.png";
import invite from "./assets/add-square.png";
import personOne from "./assets/person-one.png";
import personTwo from "./assets/person-two.png";
import personThree from "./assets/person-three.png";
import personFour from "./assets/person-four.png";
import personCounter from "./assets/person-counter.png";
import filter from "./assets/filter.png";
import calendarNum from "./assets/calendar.png";
import list from "./assets/list.png";
import menu from "./assets/menu.png";
import folder from "./assets/folder-2.png";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
  async function onDragEnd({ source, destination }) {
    if (!destination) return;
    const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
    const destinationColIndex = data.findIndex(
      (e) => e.id === destination.droppableId
    );
    const sourceCol = data[sourceColIndex];
    const destinationCol = data[destinationColIndex];

    const sourceTasks = [...sourceCol.tasks];
    const destinationTasks = [...destinationCol.tasks];

    if (source.droppableId !== destination.droppableId) {
      const [removed] = sourceTasks.splice(source.index, 1);
      destinationTasks.splice(destination.index, 0, removed);
      data[sourceColIndex].tasks = sourceTasks;
      data[destinationColIndex].tasks = destinationTasks;
    } else {
      const [removed] = destinationTasks.splice(source.index, 1);
      destinationTasks.splice(destination.index, 0, removed);
      data[destinationColIndex].tasks = destinationTasks;
    }
  }

  const data = [
    {
      id: "1",
      title: "To Do",
      color: "border-[#5030e5]",
      tasks: [
        {
          id: "101",
          title: "Brainstorming",
          priority: "Low",
          priorityColor: 'bg-[#f9eee3] text-[#d58d49]',
          hasImage: false,
          content:
            "Brainstorming brings team members diverse experience into play.",
          comments: 12,
          files: 0,
          peopleSrcs: [
            personOne,
            personFour,
            personThree,
          ],
        },
        {
          id: "102",
          title: "Research",
          priority: "High",
          priorityColor: 'bg-[#fbf1f2] text-[#e1929a]',
          hasImage: false,
          content:
            "User research helps you to create an optimal product for users.",
          peopleSrcs: [personTwo, personOne],
          comments: 10,
          files: 3
        },
        {
          id: "103",
          title: "Wireframes",
          priority: "High",
          priorityColor: 'bg-[#fbf1f2] text-[#e1929a]',
          hasImage: false,
          content:
            "Low fidelity wireframes include the most basic content and visuals.",
          comments: 3,
          files: 2,
          peopleSrcs: [
            personOne,
            personTwo,
            personFour,
          ],
        },
      ],
    },
    {
      id: "2",
      title: "On Progress",
      color: "border-[#ffa500]",
      tasks: [

        {
          id: "201",
          title: "Onboarding Illustrations",
          priority: "Low",
          priorityColor: 'bg-[#f9eee3] text-[#d58d49]',
          hasImage: true,
          srcs: [img1],
          comments: 14,
          files: 15,
          peopleSrcs: [
            personThree,
            personFour,
            personOne,
          ],
        },
        {
          id: "202",
          title: "Moodboard",
          priority: "Low",
          priorityColor: 'bg-[#f9eee3] text-[#d58d49]',
          hasImage: true,
          srcs: [img2, img3],
          comments: 9,
          files: 10,
          peopleSrcs: [personThree],
        },
      ],
    },
    {
      id: "3",
      title: "Done",
      color: "border-[#8bc48a]",
      tasks: [
        {
          id: "301",
          title: "Mobile App Design",
          priority: "Completed",
          priorityColor: 'bg-[#e6f3eb] text-[#87c287]',
          hasImage: true,
          srcs: [img4],
          comments: 12,
          files: 15,
          peopleSrcs: [
            personTwo,
            personFour,
          ],
        },
        {
          id: "302",
          title: "Design System",
          priority: "Completed",
          priorityColor: 'bg-[#e6f3eb] text-[#87c287]',
          hasImage: false,
          content: "It just needs to adapt the UI from what you did before",
          comments: 12,
          files: 15,
          peopleSrcs: [
            personOne,
            personThree,
            personFour,
          ],
        },
      ],
    },
  ];

  return (
    <>
      <nav className="flex gap-6 items-center p-4 border-b-2">
        {/* logo section */}
        <div className="flex items-center justify-between w-[25%] sm:w-[20%] xl:w-[15%] pr-4">
          <div className="lg:flex items-center gap-2">
            <img src={logo} alt="logo" className="self-center" />
            <h3 className="text-[1.25rem] font-semibold">Project M.</h3>
          </div>

          <img src={rightArrow} alt="right-arrow" className="hidden sm:block self-center" />
        </div>
        {/* search bar section */}
        <div className="w-[50%] md:w-[40%] lg:mr-auto">
          <input
            className="bg-[#f5f5f5] rounded-md w-full lg:w-[60%] self-center p-2 pl-12 input text-[0.875rem]"
            placeholder="Search for anything..."
          />
        </div>
        {/* profile and icons section */}
        <div className="flex w-[15%] sm:w-[37%] md:w-[50%] lg:w-[40%] xl:w-[25%] justify-between ">
          <div className="hidden md:flex md:gap-4">
            <img src={calendar} alt="calendar" className="self-center" />
            <img
              src={messageQuestion}
              alt="message-question"
              className="self-center"
            />
            <img
              src={notification}
              alt="notification"
              className="self-center"
            />
          </div>

          <div className="flex gap-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p>Anima Agrawal</p>
              <p className="text-[#787486] text-[0.875rem]">U.P, India</p>
            </div>

            <div className="flex gap-2 items-center">
              <img src={profile} alt="profile" />
              <img src={arrowDown} alt="arrow-down" />
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* sidebar */}
        <div className="hidden sm:flex flex-col w-[25%] md:w-[20%] xl:w-[15%] border-r-2 p-4">
          {/* options */}
          <div className="flex flex-col gap-4 border-b-2 pt-2 pb-4">
            <div className="flex gap-4 font-medium text-[#787486]">
              <img src={category} />
              <p>Home</p>
            </div>
            <div className="flex gap-4 font-medium text-[#787486]">
              <img src={message} />
              <p>Messages</p>
            </div>
            <div className="flex gap-4 font-medium text-[#787486]">
              <img src={task} />
              <p>Tasks</p>
            </div>
            <div className="flex gap-4 font-medium text-[#787486]">
              <img src={members} />
              <p>Members</p>
            </div>
            <div className="flex gap-4 font-medium text-[#787486]">
              <img src={settings} />
              <p>Settings</p>
            </div>
          </div>
          {/* my projects */}
          <div className="flex flex-col gap-4 my-4 text-[#787486] font-medium">
            <div className="flex justify-between">
              <p className="uppercase text-[0.75rem] font-bold">My Projects</p>
              <img src={addSquare} className="self-center" />
            </div>

            <div className="flex justify-between">
              <div className="flex gap-4 text-[#0D062D] font-semibold">
                <img src={greenEllipse} className="self-center" />
                <p>Mobile App</p>
              </div>

              <img src={dots} className="self-center" />
            </div>

            <div className="flex gap-4">
              <img src={yellowEllipse} className="self-center" />
              <p>Website Redesign</p>
            </div>

            <div className="flex gap-4">
              <img src={pinkEllipse} className="self-center" />
              <p>Design System</p>
            </div>

            <div className="flex gap-4">
              <img src={blueEllipse} className="self-center" />
              <p>Wireframes</p>
            </div>
          </div>

          {/* thoughts time */}
          <div className="hidden lg:relative lg:flex lg:flex-col gap-4 bg-[#f5f5f5] mt-auto items-center rounded-xl p-6 text-[0.875rem] font-medium">
            <div className="absolute rounded-[50%] mt-[-25%] bg-inherit p-6">
              <img src={lampon} />
            </div>
            <p className="mt-8 lg:mt-6 2xl:mt-4">Thoughts Time</p>
            <p className="text-center text-[#787486] text-[0.75rem]">{`We don't have any notice for you, till then you can share your thoughts with your peers.`}</p>
            <button className="bg-white w-full rounded-md px-6 py-2">
              Write a message
            </button>
          </div>
        </div>
        {/* main section */}
        <div className="flex flex-col w-full sm:w-[85%] gap-8 px-8 py-6">
          {/* first header */}
          <div className="flex flex-col lg:flex lg:flex-row sm:justify-between">
            {/* heading */}
            <div className="flex flex-col sm:flex sm:flex-row gap-4 items-center mb-2">
              <h2 className="text-[#0D062D] text-[2.875rem] font-semibold">Mobile App</h2>
              <div className="flex gap-2">
                <img src={edit} className="self-center" />
                <img src={link} className="self-center" />
              </div>
            </div>
            {/* people buttons*/}
            <div className="flex justify-between gap-4">
              {/* invite */}
              <div className="flex gap-2 items-center text-[#5030E5] font-medium">
                <img src={invite} className="self-center" />
                <p>Invite</p>
              </div>
              {/* people buttons*/}
              <div className="flex">
                <img src={personOne} className="-ml-2 self-center" />
                <img src={personTwo} className="-ml-2 self-center" />
                <img src={personThree} className="-ml-2 self-center" />
                <img src={personFour} className="-ml-2 self-center" />
                <img src={personCounter} className="-ml-2 self-center" />
              </div>
            </div>
          </div>
          {/* second header */}
          <div className="flex justify-between text-[#787486] font-medium">
            {/* left side */}
            <div className="flex-col gap-4 lg:flex lg:flex-row">
              {/* button 1 */}
              <button className="flex gap-2 items-center px-4 py-2 border-[1px] border-[#787486] rounded-md">
                <img src={filter} className="self-center" />
                <p>Filter</p>
                <img src={arrowDown} className="self-center" />
              </button>
              {/* button 2 */}
              <button className="flex gap-2 items-center px-4 py-2 border-[1px] border-[#787486] rounded-md">
                <img src={calendarNum} className="self-center" />
                <p>Today</p>
                <img src={arrowDown} className="self-center" />
              </button>
            </div>
            {/* right side */}
            <div className="flex flex-col lg:flex lg:flex-row gap-4">
              {/* share */}
              <button className="flex gap-2 items-center px-4 py-2 border-[1px] border-[#787486] rounded-md">
                <img src={members} className="self-center" />
                <p>Share</p>
              </button>
              {/* views */}
              <div className="flex gap-4 items-center md:border-l-2 border-[#787486] pl-4">
                <button>
                  <img src={list} className="self-center" />
                </button>
                <button>
                  <img src={menu} className="self-center" />
                </button>
              </div>
            </div>
          </div>
          {/* kanban */}
          <div className="flex flex-col lg:flex w-full gap-4">
            <DragDropContext onDragEnd={onDragEnd}>
              <ul className="flex flex-col lg:flex lg:flex-row flex-start w-full pt-[3rem] justify-between">
                {data.map((section) => (
                  <div key={section.id} className="w-full lg:w-[30%]">
                    <Droppable key={section.id} droppableId={section.id}>
                      {(provided) => (
                        <div
                          className="flex lg:flex lg:flex-col items-center gap-4 sm:justify-between rounded-xl p-[1.5rem] overflow-y-auto bg-[#f5f5f5] mb-4"
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                        >
                          <span className={`flex flex-col gap-6 lg:flex lg:flex-row justify-between w-full flex-1 items-center border-r-[0.25rem] lg:border-r-0 lg:border-b-[0.25rem] ${section.color} pb-[0.75rem]`}>
                            <div className="flex flex-col lg:flex lg:flex-row items-center gap-3 pr-[.75rem]">
                              <p className="text-[#0D062D] font-medium">• {section.title}</p>
                              <p className="bg-[#E0E0E0] rounded-[100%] text-[0.75rem] px-[.4rem]">
                                {section.tasks.length}
                              </p>
                            </div>

                            <section>
                              <img src={invite} className="w-6 h-6 self-center" />
                            </section>
                          </span>
                          {section.tasks.map((task, index) => (
                            <Draggable
                              key={task.id}
                              draggableId={task.id}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <li className="flex flex-1 items-center sm:w-[80%]">
                                  <a
                                    className={`flex sm:flex sm:flex-col p-4 mb-4 mt-1 bg-white rounded-xl w-full ${
                                      snapshot.isDragging
                                        ? "cursor-grab"
                                        : "!cursor-pointer"
                                    }`}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    <section className="flex flex-col flex-start justify-between gap-[0.75rem] text-[#787486]">
                                      <div className="flex items-center justify-between">
                                        <p className={`text-[0.75rem] font-medium ${task.priorityColor} p-1 rounded-md`}>
                                          {task.priority}
                                        </p>
                                        <p>...</p>
                                      </div>

                                      <h2 className="text-[1.125rem] font-semibold text-[#0D062D]">
                                        {task.title}
                                      </h2>

                                      {task.hasImage ? (
                                        <div className="flex flex-col gap-3 2xl:flex 2xl:flex-row justify-between overflow-auto">
                                          {task.srcs.map((src) => (
                                            <img key={src} src={src} className="self-center"/>
                                          ))}
                                        </div>
                                      ) : (
                                        <p className="text-[0.75rem] font-medium">
                                          {task.content}
                                        </p>
                                      )}

                                      <div className="flex flex-col gap-4 xl:flex xl:flex-row xl:justify-between">
                                        <div className="flex">
                                          {task.peopleSrcs.map((peopleSrc, index) => (
                                            index == 0 ? (<img
                                              key={peopleSrc}
                                              src={peopleSrc}
                                              className="w-6 h-6 self-center"
                                            />) : (<img
                                              key={peopleSrc}
                                              src={peopleSrc}
                                              className="-ml-2 w-6 h-6 self-center"
                                              />)
                                          ))}
                                        </div>
                                        <div className="flex flex-col 2xl:flex 2xl:flex-row gap-2">
                                          <div className="flex gap-1 items-center">
                                            <img
                                              src={message}
                                              className="w-4 h-4 self-center"
                                            />
                                            <p>{task.comments} comments</p>
                                          </div>
                                          <div className="flex gap-1 items-center">
                                            <img
                                              src={folder}
                                              className="self-center"
                                            />
                                            <p>{task.files} files</p>
                                          </div>
                                        </div>
                                      </div>
                                    </section>
                                  </a>
                                </li>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </div>
                ))}
              </ul>
            </DragDropContext>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
