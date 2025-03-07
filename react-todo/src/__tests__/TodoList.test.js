import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoList from "../components/ToDoList";

describe("TodoList Component", () => {
  test("renders TodoList component correctly", () => {
    render(<TodoList />);

    // Check if heading is present
    expect(screen.getByText(/Tasks/i)).toBeInTheDocument();

    // Ensure input field and add button are present
    expect(screen.getByText("No tasks set")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByRole("textbox");
    const addButton = screen.getByText(/Add Task/i);

    // Simulate user typing and adding a task
    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    // Verify that the new task appears in the list
    expect(screen.getByText("1: New Todo")).toBeInTheDocument();
  });

  test("toggles a todo item as completed", () => {
    render(<TodoList />);

    const input = screen.getByRole("textbox");
    const addButton = screen.getByText(/Add Task/i);

    // Add a task
    fireEvent.change(input, { target: { value: "Toggle Test" } });
    fireEvent.click(addButton);

    const task = screen.getByText(/Toggle Test/i);
    fireEvent.click(task); // Click to toggle

    expect(task).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo item", () => {
    render(<TodoList />);

    const input = screen.getByRole("textbox");
    const addButton = screen.getByText(/Add Task/i);

    // Add a task
    fireEvent.change(input, { target: { value: "Delete Test" } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByText(/Delete/i);
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Delete Test")).not.toBeInTheDocument();
  });
});
