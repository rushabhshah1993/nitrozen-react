import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Pagination, { ModeEnum } from "./Pagination";

describe("Pagination", () => {
  test("renders the Pagination component", () => {
    const { getByTestId } = render(
      <Pagination
        id="1"
        name="Pages"
        value={{
          limit: 10,
          total: 100,
          current: 2,
          prevPage: "",
          nextPage: "",
          currentPage: "",
          currentTotal: 100,
        }}
        pageSizeOptions={[10, 20]}
        onChange={(event: any) => {}}
        onPreviousClick={(event: any) => {}}
        onNextClick={(event: any) => {}}
      />
    );
    const prevBtn = getByTestId("btnPrevious");
    fireEvent.click(prevBtn);

    const nextBtn = getByTestId("btnNext");
    fireEvent.click(nextBtn);

    const paginationCount = getByTestId("pagination-count");
    expect(paginationCount.textContent?.includes("100")).toBeTruthy();
  });
  test("renders the Pagination component without certain keys in value prop", () => {
    const { getByTestId } = render(
      <Pagination
        id="1"
        name="Pages"
        value={{
          prevPage: "",
          currentPage: "",
          currentTotal: 200,
        }}
        pageSizeOptions={[10, 20]}
        onChange={(event: any) => {}}
        onPreviousClick={(event: any) => {}}
        onNextClick={(event: any) => {}}
      />
    );
    const prevBtn = getByTestId("btnPrevious");
    fireEvent.click(prevBtn);

    const nextBtn = getByTestId("btnNext");
    fireEvent.click(nextBtn);

    const paginationCount = getByTestId("pagination-count");
    expect(paginationCount.textContent?.includes("200")).toBeTruthy();
  });
  test("page size should change on dropdown select", () => {
    const screen = render(
      <Pagination
        id="1"
        name="Pages"
        value={{
          prevPage: "",
          currentPage: "",
          currentTotal: 200,
        }}
        pageSizeOptions={[10, 20]}
        onChange={(event: any) => {}}
        onPreviousClick={(event: any) => {}}
        onNextClick={(event: any) => {}}
      />
    );

    const dropdown =
      screen.container.getElementsByClassName("nitrozen-option")[1];
    fireEvent.click(dropdown);

    expect(dropdown.getAttribute("data-value")).toBe("20");
  });

  test("renders the Pagination component last page", () => {
    const { getByTestId } = render(
      <Pagination
        id="1"
        name="Pages"
        value={{
          limit: 10,
          total: 100,
          current: 10,
          prevPage: "",
          nextPage: "",
          currentPage: "",
          currentTotal: 100,
        }}
        pageSizeOptions={[10, 20]}
        onChange={(event: any) => {}}
        onPreviousClick={(event: any) => {}}
        onNextClick={(event: any) => {}}
      />
    );
    const prevBtn = getByTestId("btnPrevious");
    fireEvent.click(prevBtn);

    const nextBtn = getByTestId("btnNext");
    fireEvent.click(nextBtn);

    const paginationCount = getByTestId("pagination-count");
    expect(paginationCount.textContent?.includes("100")).toBeTruthy();
  });

  test("It should trigger page change on mode cursor", () => {
    const screen = render(
      <Pagination
        id="1"
        mode={ModeEnum.MODE_CURSOR}
        name="Pages"
        value={{
          prevPage: "",
          currentPage: "",
          currentTotal: 200,
        }}
        pageSizeOptions={[10, 20]}
        onChange={(event: any) => {}}
        onPreviousClick={(event: any) => {}}
        onNextClick={(event: any) => {}}
      />
    );

    const dropdown =
      screen.container.getElementsByClassName("nitrozen-option")[1];
    fireEvent.click(dropdown);

    expect(dropdown.getAttribute("data-value")).toBe("20");
  });

  test("onchange should not have been called on initial render", () => {
    const testProps = {
      id: "1",
      name: "Pages",
      value: {
        limit: 10,
        total: 100,
        current: 2,
        prevPage: "",
        nextPage: "",
        currentPage: "",
        currentTotal: 100,
      },
      pageSizeOptions: [10, 20],
      onChange: jest.fn(),
      onPreviousClick: (event: any) => {},
      onNextClick: (event: any) => {},
    };

    render(<Pagination {...testProps} />);

    expect(testProps?.onChange).toBeCalledTimes(0);
  });

  test("onchange should have been called on next click", () => {
    const testProps = {
      id: "1",
      name: "Pages",
      value: {
        limit: 10,
        total: 100,
        current: 2,
        prevPage: "",
        nextPage: "",
        currentPage: "",
        currentTotal: 100,
      },
      pageSizeOptions: [10, 20],
      onChange: jest.fn(),
      onPreviousClick: (event: any) => {},
      onNextClick: (event: any) => {},
    };

    const { getByTestId } = render(<Pagination {...testProps} />);

    const nextBtn = getByTestId("btnNext");
    fireEvent.click(nextBtn);

    expect(testProps?.onChange).toBeCalledTimes(1);
  });

  test("onchange should have been called on prev click", () => {
    const testProps = {
      id: "1",
      name: "Pages",
      value: {
        limit: 10,
        total: 100,
        current: 2,
        prevPage: "",
        nextPage: "",
        currentPage: "",
        currentTotal: 100,
      },
      pageSizeOptions: [10, 20],
      onChange: jest.fn(),
      onPreviousClick: (event: any) => {},
      onNextClick: (event: any) => {},
    };

    const { getByTestId } = render(<Pagination {...testProps} />);

    const prevBtn = getByTestId("btnPrevious");
    fireEvent.click(prevBtn);

    expect(testProps?.onChange).toBeCalledTimes(1);
  });

  test("onchange should have been called on changing pageSize", () => {
    const testProps = {
      id: "1",
      name: "Pages",
      value: {
        limit: 10,
        total: 100,
        current: 2,
        prevPage: "",
        nextPage: "",
        currentPage: "",
        currentTotal: 100,
      },
      pageSizeOptions: [10, 20],
      onChange: jest.fn(),
      onPreviousClick: (event: any) => {},
      onNextClick: (event: any) => {},
    };

    const screen = render(<Pagination {...testProps} />);

    const dropdown =
      screen.container.getElementsByClassName("nitrozen-option")[1];
    fireEvent.click(dropdown);

    expect(testProps?.onChange).toBeCalledTimes(1);
  });
});
