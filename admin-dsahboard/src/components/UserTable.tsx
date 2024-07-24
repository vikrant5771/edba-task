"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Checkbox } from "@/components/ui/checkbox";

interface User {
  id: string;
  student_name: string;
  email: string;
  course_name: string;
}

const UserTable: React.FC = () => {
  const initialData: User[] = [
    {
      id: "1",
      student_name: "John Doe",
      email: "john.doe@example.com",
      course_name: "Introduction to React",
    },
    {
      id: "2",
      student_name: "Jane Smith",
      email: "jane.smith@example.com",
      course_name: "Advanced Node.js",
    },
    {
      id: "3",
      student_name: "Alice Johnson",
      email: "alice.johnson@example.com",
      course_name: "CSS Flexbox",
    },
    {
      id: "4",
      student_name: "Bob Brown",
      email: "bob.brown@example.com",
      course_name: "TypeScript Basics",
    },
    {
      id: "5",
      student_name: "Charlie Davis",
      email: "charlie.davis@example.com",
      course_name: "Python for Data Science",
    },
    {
      id: "6",
      student_name: "Daisy Evans",
      email: "daisy.evans@example.com",
      course_name: "Machine Learning",
    },
    {
      id: "7",
      student_name: "Edward Clark",
      email: "edward.clark@example.com",
      course_name: "JavaScript ES6",
    },
    {
      id: "8",
      student_name: "Fiona Martinez",
      email: "fiona.martinez@example.com",
      course_name: "React Native Development",
    },
    {
      id: "9",
      student_name: "George Wilson",
      email: "george.wilson@example.com",
      course_name: "Django for Beginners",
    },
    {
      id: "10",
      student_name: "Hannah Lewis",
      email: "hannah.lewis@example.com",
      course_name: "Cloud Computing",
    },
    {
      id: "11",
      student_name: "Isaac Walker",
      email: "isaac.walker@example.com",
      course_name: "Deep Learning",
    },
    {
      id: "12",
      student_name: "Jessica Hall",
      email: "jessica.hall@example.com",
      course_name: "Full-Stack Development",
    },
    {
      id: "13",
      student_name: "Kevin Allen",
      email: "kevin.allen@example.com",
      course_name: "Software Engineering",
    },
    {
      id: "14",
      student_name: "Laura Young",
      email: "laura.young@example.com",
      course_name: "Database Management",
    },
    {
      id: "15",
      student_name: "Michael King",
      email: "michael.king@example.com",
      course_name: "API Design",
    },
    {
      id: "16",
      student_name: "Nina Scott",
      email: "nina.scott@example.com",
      course_name: "UX/UI Design",
    },
    {
      id: "17",
      student_name: "Oscar Wright",
      email: "oscar.wright@example.com",
      course_name: "Blockchain Technology",
    },
    {
      id: "18",
      student_name: "Pamela Green",
      email: "pamela.green@example.com",
      course_name: "Computer Networks",
    },
    {
      id: "19",
      student_name: "Quincy Adams",
      email: "quincy.adams@example.com",
      course_name: "Web Security",
    },
    {
      id: "20",
      student_name: "Rachel Carter",
      email: "rachel.carter@example.com",
      course_name: "Data Visualization",
    },
  ];

  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const usersPerPage = 10;
  const totalPages = Math.ceil(initialData.length / usersPerPage);

  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = initialData.slice(startIndex, endIndex);

  const handleSelectUser = (id: string) => {
    setSelectedUsers((prevSelectedUsers) => {
      const updatedSelection = prevSelectedUsers.includes(id)
        ? prevSelectedUsers.filter((userId) => userId !== id)
        : [...prevSelectedUsers, id];

      console.log(
        "Selected Users:",
        initialData.filter((user) => updatedSelection.includes(user.id))
      );
      return updatedSelection;
    });
  };

  const handleSelectAll = () => {
    setSelectedUsers((prevSelectedUsers) => {
      const allUserIds = initialData.map((user) => user.id);
      const updatedSelection =
        prevSelectedUsers.length === allUserIds.length ? [] : allUserIds;

      console.log(
        "Selected Users:",
        initialData.filter((user) => updatedSelection.includes(user.id))
      );
      return updatedSelection;
    });
  };

  const changePage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-[80%] bg-white shadow-md rounded-lg p-3 overflow-hidden">
        <Table
          className="w-full divide-y divide-gray-200"
          style={{ tableLayout: "fixed" }}
        >
          <TableHeader className="bg-slate-300 shadow-xl rounded-t-lg">
            <TableRow>
              <TableHead
                style={{
                  width: "10%",
                  padding: "8px",
                  boxSizing: "border-box",
                }}
              >
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={selectedUsers.length === initialData.length}
                    onCheckedChange={handleSelectAll}
                  />
                  <span className="text-gray-700 font-medium">Select All</span>
                </div>
              </TableHead>
              <TableHead
                style={{
                  width: "30%",
                  padding: "8px",
                  boxSizing: "border-box",
                }}
              >
                NAME
              </TableHead>
              <TableHead
                style={{
                  width: "30%",
                  padding: "8px",
                  boxSizing: "border-box",
                }}
              >
                EMAIL
              </TableHead>
              <TableHead
                style={{
                  width: "30%",
                  padding: "8px",
                  boxSizing: "border-box",
                }}
              >
                COURSE
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentUsers.map((user) => (
              <TableRow key={user.id} style={{ height: "48px" }}>
                <TableCell
                  style={{
                    width: "10%",
                    padding: "8px",
                    boxSizing: "border-box",
                  }}
                >
                  <Checkbox
                    checked={selectedUsers.includes(user.id)}
                    onCheckedChange={() => handleSelectUser(user.id)}
                  />
                </TableCell>
                <TableCell
                  style={{
                    width: "30%",
                    padding: "8px",
                    boxSizing: "border-box",
                  }}
                >
                  {user.student_name}
                </TableCell>
                <TableCell
                  style={{
                    width: "30%",
                    padding: "8px",
                    boxSizing: "border-box",
                  }}
                >
                  {user.email}
                </TableCell>
                <TableCell
                  style={{
                    width: "30%",
                    padding: "8px",
                    boxSizing: "border-box",
                  }}
                >
                  {user.course_name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="w-full mt-5 flex justify-center items-center">
        <Pagination>
          <PaginationContent>
            <PaginationPrevious
              disabled={currentPage === 1}
              onClick={() => changePage(currentPage - 1)}
            />
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <PaginationItem
                  key={page}
                  className={
                    currentPage === page
                      ? "bg-orange-400 rounded-md text-white duration-200"
                      : ""
                  }
                  onClick={() => changePage(page)}
                >
                  <PaginationLink>{page}</PaginationLink>
                </PaginationItem>
              )
            )}
            {totalPages > 1 && currentPage < totalPages && (
              <PaginationNext
                disabled={currentPage === totalPages}
                onClick={() => changePage(currentPage + 1)}
              />
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default UserTable;
