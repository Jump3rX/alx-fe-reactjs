import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoList from "../components/TodoList";
import AddTodoForm from "../components/AddTodoForm";

describe("TodoList Component", () => {
  test("renders TodoList component correctly", () => {
    render(<TodoList />);
    expect(screen.getByRole("heading", { name: /Tasks/i })).toBeInTheDocument();
    expect(screen.getByText("No tasks set")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByText("Add Task")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByRole("textbox");
    const addButton = screen.getByText("Add Task");
    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);
    expect(screen.getByText("1: New Task")).toBeInTheDocument();
  });

  test("toggles a todo item as completed", () => {
    render(<TodoList />);
    const input = screen.getByRole("textbox");
    const addButton = screen.getByText("Add Task");
    fireEvent.change(input, { target: { value: "Toggle Task" } });
    fireEvent.click(addButton);
    const task = screen.getByText(/Toggle Task/i);
    expect(task).not.toHaveStyle("text-decoration: line-through");
    fireEvent.click(task);
    expect(task).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo item", () => {
    render(<TodoList />);
    const input = screen.getByRole("textbox");
    const addButton = screen.getByText("Add Task");
    fireEvent.change(input, { target: { value: "Delete Task" } });
    fireEvent.click(addButton);
    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);
    expect(screen.queryByText("Delete Task")).not.toBeInTheDocument();
  });
});
