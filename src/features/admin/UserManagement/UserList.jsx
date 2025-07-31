"use client";
import React, { useMemo, useState } from "react";
import { Pagination } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const UserList = ({ data }) => {
  const [selected, setSelected] = useState(new Set());
  const allIds = useMemo(() => data.map((d) => d._id), []);
  const allSelected = selected.size === allIds.length && allIds.length > 0;
  const isIndeterminate = selected.size > 0 && !allSelected;
  const [filter, setFilter] = useState({
    page: 1,
    limit: 10,
  });
  const isTabletOrMobile = useMediaQuery("(max-width: 1023px)", undefined, {
    getInitialValueInEffect: true, 
  });

  const toggleAll = (checked) => {
    if (checked) setSelected(new Set(allIds));
    else setSelected(new Set());
  };

  const toggleOne = (id) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="w-full overflow-hidden rounded-md border border-[#E2E8F0] bg-white">
      {/* Header */}
      {!isTabletOrMobile ? (
        <div
          className="grid grid-cols-10 items-center h-[64px] px-4 text-[#94A3B8] text-[14px] font-semibold bg-[#F4F4F7]"
          // Indeterminate styling for the "select all" checkbox (visual cue)
        >
          <div className="col-span-1 flex items-center">
            <input
              type="checkbox"
              className="size-4 accent-black"
              checked={allSelected}
              onChange={(e) => toggleAll(e.target.checked)}
              ref={(el) => {
                if (el) el.indeterminate = isIndeterminate;
              }}
              aria-label="Select all rows"
            />
          </div>

          <div className="col-span-2">Name</div>
          <div className="col-span-2">Email</div>
          <div className="col-span-1">Gender</div>
          <div className="col-span-1">Country</div>
          <div className="col-span-1">Klarna Shares</div>
          <div className="col-span-1">Total Value</div>
          <div className="col-span-1">
            <div className="flex justify-center">
              <button
                type="button"
                className="h-8 w-8 rounded-md hover:bg-[#E2E8F0] flex items-center justify-center cursor-pointer"
                onClick={() => console.log("Actions for", selected)}
              >
                <span className="text-xl leading-none">⋯</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="size-4 accent-black"
              checked={allSelected}
              onChange={(e) => toggleAll(e.target.checked)}
              ref={(el) => {
                if (el) el.indeterminate = isIndeterminate;
              }}
              aria-label="Select all rows"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="h-8 w-8 rounded-md hover:bg-[#E2E8F0] flex items-center justify-center cursor-pointer"
              onClick={() => console.log("Actions for", selected)}
            >
              <span className="text-xl leading-none">⋯</span>
            </button>
          </div>
        </div>
      )}
      {/* Rows */}
      <div className="overflow-y-auto lg:max-h-[calc(100dvh-420px)] md:max-h-[calc(100dvh-400px)]">
        {isTabletOrMobile ? (
          <div className="grid md:grid-cols-2 gap-4 p-4">
            {data.map((row, idx) => {
              const isChecked = selected.has(row._id);
              return (
                <div key={row._id} className="border border-[#F1F5F9] bg-white">
                  {/* Header: checkbox + name (left), actions (right) */}
                  <div className="flex items-start justify-between p-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 accent-black"
                        checked={isChecked}
                        onChange={() => toggleOne(row._id)}
                        aria-label={`Select ${row.Name}`}
                      />
                      <span className="font-semibold text-[15px]">
                        {row.Name}
                      </span>
                    </label>

                    <button
                      type="button"
                      className="h-8 w-8 rounded-md hover:bg-[#F1F5F9] flex items-center justify-center"
                      onClick={() => console.log("Actions for", row._id)}
                      aria-label={`Actions for ${row.Name}`}
                    >
                      <span className="text-xl leading-none">⋯</span>
                    </button>
                  </div>
                  <hr className="border-1 border-[#E2E8F0] mb-4" />

                  {/* Body: title on left, value on right (justify-between) */}
                  <div className="px-4 pb-4 text-[14px] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[#64748B]">Email</span>
                      <span className="text-right text-[#334155] break-all">
                        {row.Email}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#64748B]">Gender</span>
                      <span className="font-medium">{row.Gender}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#64748B]">Country</span>
                      <span className="font-semibold">{row.Country}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#64748B]">Klarna shares</span>
                      <span className="tabular-nums">{row.KlarnaShares}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#64748B]">Total Value</span>
                      <span className="font-semibold">{row.TotalValue}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            {data.map((row, idx) => {
              const isChecked = selected.has(row._id);
              return (
                <div
                  key={row._id}
                  className={`grid grid-cols-10 items-center px-4 h-[64px] text-[14px] ${
                    idx !== data.length - 1 ? "border-b border-[#E2E8F0]" : ""
                  } hover:bg-[#F8FAFC]`}
                >
                  <div className="col-span-1 flex items-center">
                    <input
                      type="checkbox"
                      className="size-4 accent-black"
                      checked={isChecked}
                      onChange={() => toggleOne(row._id)}
                      aria-label={`Select ${row.Name}`}
                    />
                  </div>
                  <div className="col-span-2 truncate">{row.Name}</div>
                  <div className="col-span-2 truncate text-[#334155]">
                    {row.Email}
                  </div>
                  <div className="col-span-1">{row.Gender}</div>
                  <div className="col-span-1">{row.Country}</div>
                  <div className="col-span-1 tabular-nums">
                    {row.KlarnaShares}
                  </div>
                  <div className="col-span-1 font-medium">{row.TotalValue}</div>
                  <div className="col-span-1">
                    <div className="flex justify-center">
                      <button
                        type="button"
                        className="h-8 w-8 rounded-md hover:bg-[#F1F5F9] flex items-center justify-center cursor-pointer"
                        onClick={() => console.log("Actions for", row._id)}
                        aria-label={`Actions for ${row.Name}`}
                      >
                        <span className="text-xl leading-none">⋯</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <hr className="mt-4 mb-8 border-1 border-[#F1F5F9]" />
      <div className="pagination">
        <Pagination
          total={data.length}
          value={filter.page}
          onChange={(set) => setFilter((prev) => ({ ...prev, page: set }))}
          mt="sm"
        />
      </div>
    </div>
  );
};

export default UserList;
