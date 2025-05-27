import React from "react";
import "./Dashboard.css";
function Dashboard() {
  return (
    <>
      <div className="webpage">
   

        <div className="body  row" style={{ minHeight: "600px" }}>
          <nav className="navbar navbar-light bg-light d-md-none">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#sidebarMenu"
                aria-controls="sidebarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </nav>

          <div className="collapse left-content d-md-block col-md-2 bg-light p-3 "
            id="sidebarMenu"
          > <div className="heading row d-flex align-items-center p-3 bg-primary text-white">
                 <div className="text-start">STUDENT CARD HUB</div></div>
            <div className="mb-2 ms-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon me-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Dashboard
            </div>
            <div className="mb-2 ms-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon me-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                />
              </svg>
              All Student Cards
            </div>
            <hr />
            <div className="mb-2 ms-3">School Management</div>
            <div className="mb-2 ms-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon me-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              Manage Schools
            </div>
            <div className="mb-2 ms-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon me-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Add New School
            </div>
            <hr />
            <div className="mb-2 ms-3">User Management</div>
            <div className="mb-2 ms-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon me-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Settings
            </div>
            <div className="mb-2 ms-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon me-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Log Out
            </div>
          </div>

          <div className="right-content col-10 p-3">
                 <div className="heading row d-flex align-items-center p-3 bg-primary text-white">
     
          <div className="col text-end">superadmin</div>
        </div>
                 <div className="row"> <div className="col-3 text-center p-3">    Dashboard</div></div>

            <div className="row bg-light align-items-center p-2 ps-4">
         
              <div className="container py-3 col-10 ">
                <div className="container">
                  <div className="row">Welcome To The Admin Panel</div>
                  <button class="btn btn-primary">View Student Cards</button>
                </div>
                <div className="container">
                  <div className="row"> School Statistics</div>
                  <div className="row ">
                    <div className="col-4">
                      <div className="border border-primary p-3 h-100 d-flex flex-column ">
                        <div className="row">
                          <div className="col-2">
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 icon2"  fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4z"></path>
                                    </svg>
                          </div>
                          <div className="col-10">
                            {" "}
                            <div>Total Schools Cards</div>
                          </div>
                        </div>
                        <div className="row">
                          <div>1</div>
                        </div>
                      </div>
                    </div>
                     <div className="col-4">
                      <div className="border border-primary p-3 h-100 d-flex flex-column ">
                        <div className="row">
                          <div className="col-2">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500 icon2" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                          </div>
                          <div className="col-10">
                            {" "}
                            <div>Latest Submission</div>
                          </div>
                        </div>
                        <div className="row">
                          <div>None</div>
                        </div>
                      </div>
                    </div>
                      <div className="col-4">
                      <div className="border border-primary p-3 h-100 d-flex flex-column ">
                        <div className="row">
                          <div className="col-2">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500 icon2" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                    </svg>
                          </div>
                          <div className="col-10">
                            {" "}
                            <div>This Month</div>
                          </div>
                        </div>
                        <div className="row">
                          <div>0</div>
                            <div>New submissions this month</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row"> Quick Actions</div>
                  <div className="row gx-3">
                    <div className="col-3">
                      <div className="border border-primary p-3 h-100 d-flex">
                        <div className="col-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 text-white icon2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4 6h16M4 10h16M4 14h16M4 18h16"
                            ></path>
                          </svg>
                        </div>
                        <div className="col">
                          <div>View All Cards</div>
                          <div>Manage Student cards</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-3">
                      <div className="border border-primary p-3 h-100 d-flex">
                        <div className="col-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 text-white icon2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            ></path>
                          </svg>
                        </div>
                        <div className="col">
                          <div>Manage Schools</div>
                          <div>Add or edit Schools</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-3">
                      <div className="border border-primary p-3 h-100 d-flex ">
                        <div className="col-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 text-white icon2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        </div>
                        <div className="col">
                          <div>Add School</div>
                          <div>Create a new School</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row"> School Statistics</div>
                  <div className="row ">
                    <div className="col-4">
                      <div className="border border-primary p-3 h-100 d-flex flex-column ">
                        <div className="row">
                          <div className="col-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon2 text-white mb-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              width={40}
                              height={40}
                            >
                              <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <div className="col-10">
                            {" "}
                            <div>Total Schools</div>
                          </div>
                        </div>
                        <div className="row">
                          <div>1</div>
                        </div>
                      </div>
                    </div>
                     <div className="col-4">
                      <div className="border border-primary p-3 h-100 d-flex flex-column ">
                        <div className="row">
                          <div className="col-2">
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-amber-500 icon2" fill="none" viewBox="0 0 24 24" stroke="white">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                        </svg>
                          </div>
                          <div className="col-10">
                            {" "}
                            <div>School Admins</div>
                          </div>
                        </div>
                        <div className="row">
                          <div>8</div>
                        </div>
                      </div>
                    </div>
                      <div className="col-4">
                      <div className="border border-primary p-3 h-100 d-flex flex-column ">
                        <div className="row">
                          <div className="col-2">
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-500 icon2" fill="none" viewBox="0 0 24 24" stroke="white">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                          </div>
                          <div className="col-10">
                            {" "}
                            <div>Latest School</div>
                          </div>
                        </div>
                        <div className="row">
                          <div>test123</div>
                            <div>2 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
