'use client';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBoards } from "../store/boardSlice";

const BoardList = () => {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.board.boards);

  // Fetch boards when the component mounts
  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  return (
    <div>
      <h1>Boards</h1>
      {boards.length > 0 ? (
        boards.map((board) => (
          <div key={board.id}>
            <h2>{board.title}</h2>
            <ul>
              {board.lists.map((list) => (
                <li key={list.id}>{list.title}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>Loading boards...</p>
      )}
    </div>
  );
};

export default BoardList;
