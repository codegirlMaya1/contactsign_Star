"use client";
"use client";
import React from "react";
import { SearchFilter } from "./SearchFilter";

export const SearchBar: React.FC = () => {
  const locationIcon = `<svg id="I2155:4045;2155:4003" width="140" height="33" viewBox="0 0 140 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="location-icon" style="width: 139px; height: 32px"> <path d="M7.92304 17.1923C9.45244 17.1923 10.6923 15.9524 10.6923 14.423C10.6923 12.8936 9.45244 11.6538 7.92304 11.6538C6.39364 11.6538 5.15381 12.8936 5.15381 14.423C5.15381 15.9524 6.39364 17.1923 7.92304 17.1923Z" stroke="#525252" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.8462 14.4231C14.8462 20.6538 7.92308 25.5 7.92308 25.5C7.92308 25.5 1 20.6538 1 14.4231C1 12.587 1.72939 10.8261 3.02772 9.52772C4.32605 8.22939 6.08696 7.5 7.92308 7.5C9.75919 7.5 11.5201 8.22939 12.8184 9.52772C14.1168 10.8261 14.8462 12.587 14.8462 14.4231V14.4231Z" stroke="#525252" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <text fill="#525252" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="14" font-weight="500" letter-spacing="0em"><tspan x="22.8462" y="15.0909">WHERE</tspan></text> <text fill="#525252" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="10" letter-spacing="0em"><tspan x="23.0288" y="29.6364">Location</tspan></text> </svg>`;

  const calendarIcon = `<svg id="I2155:4045;2155:4012" width="85" height="34" viewBox="0 0 85 34" fill="none" xmlns="http://www.w3.org/2000/svg" class="calendar-icon" style="width: 139px; height: 32px"> <path d="M22 7H2C1.44772 7 1 7.44772 1 8V28C1 28.5523 1.44772 29 2 29H22C22.5523 29 23 28.5523 23 28V8C23 7.44772 22.5523 7 22 7Z" stroke="#525252" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18 5V9" stroke="#525252" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 5V9" stroke="#525252" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M1 13H23" stroke="#525252" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <text fill="#525252" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="14" font-weight="500" letter-spacing="0em"><tspan x="31" y="15.5909">WHEN</tspan></text> <text fill="#525252" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="10" letter-spacing="0em"><tspan x="31.1689" y="30.1364">Select date</tspan></text> </svg>`;

  const barbellIcon = `<svg id="I2155:4045;2155:4024" layer-name="Barbell" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="barbell-icon" style="width: 139px; height: 32px"> <g clip-path="url(#clip0_4040_2374)"> <path d="M11 7.5H8C7.44772 7.5 7 7.94772 7 8.5V24.5C7 25.0523 7.44772 25.5 8 25.5H11C11.5523 25.5 12 25.0523 12 24.5V8.5C12 7.94772 11.5523 7.5 11 7.5Z" stroke="#525252" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M24 7.5H21C20.4477 7.5 20 7.94772 20 8.5V24.5C20 25.0523 20.4477 25.5 21 25.5H24C24.5523 25.5 25 25.0523 25 24.5V8.5C25 7.94772 24.5523 7.5 24 7.5Z" stroke="#525252" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M25 10.5H28C28.2652 10.5 28.5196 10.6054 28.7071 10.7929C28.8946 10.9804 29 11.2348 29 11.5V21.5C29 21.7652 28.8946 22.0196 28.7071 22.2071C28.5196 22.3946 28.2652 22.5 28 22.5H25" stroke="#525252" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 22.5H4C3.73478 22.5 3.48043 22.3946 3.29289 22.2071C3.10536 22.0196 3 21.7652 3 21.5V11.5C3 11.2348 3.10536 10.9804 3.29289 10.7929C3.48043 10.6054 3.73478 10.5 4 10.5H7" stroke="#525252" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 16.5H20" stroke="#525252" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M29 16.5H31" stroke="#525252" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M1 16.5H3" stroke="#525252" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_4040_2374"> <rect width="32" height="32" fill="white" transform="translate(0 0.5)"></rect> </clipPath> </defs> </svg>`;

  const searchIcon = `<svg id="I2155:4045;2155:3996" layer-name="MagnifyingGlass" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="search-icon" style="position: absolute; right: 15px; top: 15px; width: 20px; height: 20px"> <path d="M8.875 17.25C13.2242 17.25 16.75 13.7242 16.75 9.375C16.75 5.02576 13.2242 1.5 8.875 1.5C4.52576 1.5 1 5.02576 1 9.375C1 13.7242 4.52576 17.25 8.875 17.25Z" stroke="#F45E00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.4434 14.9438L18.9997 19.5002" stroke="#F45E00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;

  return (
    <div className="search-container">
      <div className="search-wrapper">
        <div className="filters-container">
          <SearchFilter icon={locationIcon} title="WHERE" subtitle="Location" />
          <SearchFilter
            icon={calendarIcon}
            title="WHEN"
            subtitle="Select date"
          />
          <SearchFilter icon={barbellIcon} title="WHAT" subtitle="Talent" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: searchIcon }} />
      </div>
      <style jsx>{`
        .search-container {
          flex: 1;
          max-width: 548px;
          margin: 0 141px;
        }
        .search-wrapper {
          position: relative;
          height: 49px;
          border-radius: 100px;
          border: 1px solid #f45e00;
          box-shadow:
            -2px -2px 10px 0 rgba(206, 206, 206, 0.15),
            2px 2px 4px 0 rgba(206, 206, 206, 0.15);
          background-color: #fff;
        }
        .filters-container {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 5px;
          height: 40px;
        }
        @media (max-width: 991px) {
          .search-container {
            margin: 0 60px;
          }
        }
        @media (max-width: 640px) {
          .search-container {
            margin: 0;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};


export default SearchBar;