"use client"

import LoaderPrimary from "@/_components/loaders/LoaderPrimary"
import { FirstFloorTableData } from "@/_data/sample/FirstFloorTableData"
import { useTablePlanStore } from "@/_store/useTablePlanStore"
import { useEffect } from "react"

export default function FirstFloorPlan() {
  const { selectedTable, 
      hoveredTable, 
      setSelectedTable, 
      setHoveredTable, 
      setTablesData,
      setLeaveTable,
      tablesData,
      isLoading
    } = useTablePlanStore()
  
    useEffect(() => {
      setTablesData(FirstFloorTableData)
    }, [])
  
  
    if(isLoading){
      return (
        <LoaderPrimary />
      )
    }
  return (
    <>
    <div className="w-full h-screen overflow-auto pt-32 pb-60">
        <section className='mx-auto w-[75%] h-screen relative flex items-center justify-center'>


          <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlSpace="preserve"
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 726.1 595.3"
                        >
                        <style>
                        {
                          ".st0{fill:#fff}.st43{fill:#2e5764}.st141,.st142,.st143,.st144,.st145{fill:none;stroke:#666baf;stroke-width:.24;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st142,.st143,.st144,.st145{stroke:#dc6768}.st143,.st144,.st145{stroke:#676767}.st144,.st145{stroke:#5c63ab;stroke-width:.66}.st145{stroke:#676767}.st146,.st147,.st148,.st149,.st151,.st152,.st153,.st154,.st155,.st156,.st157,.st158{fill:none;stroke:gray;stroke-width:.24;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st147,.st148,.st149,.st151,.st152,.st153,.st154,.st155,.st156,.st157,.st158{stroke:#e52521}.st148,.st149,.st151,.st152,.st153,.st154,.st155,.st156,.st157,.st158{stroke:#7e7e7e}.st149,.st151,.st152,.st153,.st154,.st155,.st156,.st157,.st158{stroke:#418181}.st151,.st152,.st153,.st154,.st155,.st156,.st157,.st158{stroke:#000}.st152,.st153,.st154,.st155,.st156,.st157,.st158{stroke-width:.66}.st153,.st154,.st155,.st156,.st157,.st158{stroke-width:.48}.st154,.st155,.st156,.st157,.st158{stroke:#2b4b9b;stroke-width:.66}.st155,.st156,.st157,.st158{stroke-width:.24}.st156,.st157,.st158{stroke:#e52521;stroke-width:.48}.st157,.st158{stroke:#eacb1c;stroke-width:.96}.st158{stroke:#20a637;stroke-width:1.38}.st160{fill:#010202}.st161{font-family:&quot;CenturyGothic-Bold&quot;}.st162{font-size:6.8069px}.st163{font-size:6.8075px}.st164{font-family:&quot;Poppins-Medium&quot;}.st165{font-size:6.7982px}.st166{font-size:5.6652px}.st200{fill:none;stroke:#787878;stroke-width:.24;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st201{font-size:6.8037px}.st202{font-size:7.9312px}.st203{fill:#020203}.st204{fill:#1d8236}"
                        }
                        </style>
          
                        { tablesData.map((i, key) => (
                          <path key={key} 
                            {...{ title: i.id }}
                            className={`cursor-pointer transition-all duration-0 ${
                              hoveredTable?.id === i.id 
                              ? 'opacity-100 fill-slate-600 drop-shadow-md stroke-1' 
                              : `${i.css} opacity-100`
                              }`}
                            d={i.d}  
                            onClick={() => setSelectedTable(i)}
                            onMouseEnter={() => setHoveredTable(i)}
                            onMouseLeave={setLeaveTable} />
                          )) 
                        }
          
                        <g>
          
                          <path d="M399.3 309H471.6V310.6H399.3z" className="st0" />
                          <path d="M399.3 349.2H480.6V350.8H399.3z" className="st0" />
                          <path d="M470 307.7H471.6V309.09999999999997H470z" className="st0" />
                          <defs>
                            <path
                              id="SVGID_1_"
                              d="M470.6 267.5 470.6 269.1 510.1 269.1 510.3 268.8 510.4 267.5"
                            />
                          </defs>
                          <clipPath id="SVGID_2_">
                            <use xlinkHref="#SVGID_1_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_2_)">
                            <defs>
                              <path
                                id="SVGID_3_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_4_">
                              <use xlinkHref="#SVGID_3_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M470.6 267.5H510.40000000000003V269.1H470.6z"
                              clipPath="url(#SVGID_4_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_5_"
                              d="M510.3 268.8 510.3 268.9 510.1 269.1 510.1 349.2 510.1 349.2 510.4 349.5 510.4 268.8"
                            />
                          </defs>
                          <clipPath id="SVGID_6_">
                            <use xlinkHref="#SVGID_5_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_6_)">
                            <defs>
                              <path
                                id="SVGID_7_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_8_">
                              <use xlinkHref="#SVGID_7_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M510.1 268.8H510.40000000000003V349.5H510.1z"
                              clipPath="url(#SVGID_8_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_9_"
                              d="M480.6 349.2 480.6 350.9 510.4 350.9 510.4 349.5 510.1 349.2"
                            />
                          </defs>
                          <clipPath id="SVGID_10_">
                            <use xlinkHref="#SVGID_9_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_10_)">
                            <defs>
                              <path
                                id="SVGID_11_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_12_">
                              <use xlinkHref="#SVGID_11_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M480.6 349.2H510.40000000000003V350.8H480.6z"
                              clipPath="url(#SVGID_12_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_13_"
                              d="M398 307.7 398 309.2 399.3 309.2 399.3 309 470 309 470 307.7"
                            />
                          </defs>
                          <clipPath id="SVGID_14_">
                            <use xlinkHref="#SVGID_13_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_14_)">
                            <defs>
                              <path
                                id="SVGID_15_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_16_">
                              <use xlinkHref="#SVGID_15_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M398 307.7H469.9V309.3H398z"
                              clipPath="url(#SVGID_16_)"
                            />
                          </g>
                          <path d="M398 267.5H470.5V269.1H398z" className="st0" />
                          <defs>
                            <path
                              id="SVGID_17_"
                              d="M439.4 349v.2h8v-.2zm0-36.9v35.7h8v-35.7zm0-1.4v.2h8v-.2z"
                            />
                          </defs>
                          <clipPath id="SVGID_18_">
                            <use xlinkHref="#SVGID_17_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_18_)">
                            <defs>
                              <path
                                id="SVGID_19_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_20_">
                              <use xlinkHref="#SVGID_19_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M439.4 310.7H447.4V349.2H439.4z"
                              clipPath="url(#SVGID_20_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_21_"
                              d="M398 307.5v.2h1.2v-.2zm0-36.9v35.6h1.2v-35.6zm0-1.5v.1h1.2v-.1z"
                            />
                          </defs>
                          <clipPath id="SVGID_22_">
                            <use xlinkHref="#SVGID_21_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_22_)">
                            <defs>
                              <path
                                id="SVGID_23_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_24_">
                              <use xlinkHref="#SVGID_23_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M398 269.1H399.2V307.6H398z"
                              clipPath="url(#SVGID_24_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_25_"
                              d="M472.2 306.3 472.1 306.3 471.9 306.5 471.7 306.6 471.5 306.8 471.5 307.3 471.7 307.3 471.7 306.9 472.2 306.8 472.3 306.7 472.4 306.5 472.5 306.4 472.5 306.3"
                            />
                          </defs>
                          <clipPath id="SVGID_26_">
                            <use xlinkHref="#SVGID_25_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_26_)">
                            <defs>
                              <path
                                id="SVGID_27_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_28_">
                              <use xlinkHref="#SVGID_27_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M471.5 306.3H472.5V307.40000000000003H471.5z"
                              clipPath="url(#SVGID_28_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_29_"
                              d="M471.5 306.2 471.5 306.8 398 306.8 398 306.9 471.5 306.9 471.7 306.7 471.7 306.6 471.9 306.5 472.1 306.3 472.3 306.2"
                            />
                          </defs>
                          <clipPath id="SVGID_30_">
                            <use xlinkHref="#SVGID_29_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_30_)">
                            <defs>
                              <path
                                id="SVGID_31_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_32_">
                              <use xlinkHref="#SVGID_31_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M398 306.2H472.3V306.9H398z"
                              clipPath="url(#SVGID_32_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_33_"
                              d="M472.7 306.5 472.7 306.6 472.5 306.7 472.4 306.8 472.3 306.9 472.3 310.9 472.5 310.9 472.5 306.9 473 306.9 473 306.5"
                            />
                          </defs>
                          <clipPath id="SVGID_34_">
                            <use xlinkHref="#SVGID_33_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_34_)">
                            <defs>
                              <path
                                id="SVGID_35_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_36_">
                              <use xlinkHref="#SVGID_35_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M472.3 306.5H473V310.9H472.3z"
                              clipPath="url(#SVGID_36_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_37_"
                              d="M471.9 310.9 472.3 311.4 399.3 311.4 399.3 311.6 472.5 311.6 472.7 311.8 472.9 311.9 472.9 311.8 472.9 311.8 473 311.2 472.8 310.9 472.7 310.9"
                            />
                          </defs>
                          <clipPath id="SVGID_38_">
                            <use xlinkHref="#SVGID_37_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_38_)">
                            <defs>
                              <path
                                id="SVGID_39_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_40_">
                              <use xlinkHref="#SVGID_39_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M399.3 310.9H473.1V311.9H399.3z"
                              clipPath="url(#SVGID_40_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_41_"
                              d="M399.3 311.6v.5l73.7-.1-.5-.5m-73.2-.6v.5l73.1-.1-.5-.5h-72.6z"
                            />
                          </defs>
                          <clipPath id="SVGID_42_">
                            <use xlinkHref="#SVGID_41_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_42_)">
                            <defs>
                              <path
                                id="SVGID_43_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_44_">
                              <use xlinkHref="#SVGID_43_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M399.3 310.9H473.1V312.09999999999997H399.3z"
                              clipPath="url(#SVGID_44_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_45_"
                              d="m472.9 311.8-.1.1.1.1.1.1zm-.4-4.9v4h.2l.1.1.2.2v-4.3zm-.8 0v3.9h.5v-3.9z"
                            />
                          </defs>
                          <clipPath id="SVGID_46_">
                            <use xlinkHref="#SVGID_45_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_46_)">
                            <defs>
                              <path
                                id="SVGID_47_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_48_">
                              <use xlinkHref="#SVGID_47_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M471.7 306.9H473V312.09999999999997H471.7z"
                              clipPath="url(#SVGID_48_)"
                            />
                          </g>
                          <defs>
                            <path id="SVGID_49_" d="M398 306.9v.5h73.5v-.5zm0-.7v.6h73.5v-.6z" />
                          </defs>
                          <clipPath id="SVGID_50_">
                            <use xlinkHref="#SVGID_49_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_50_)">
                            <defs>
                              <path
                                id="SVGID_51_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_52_">
                              <use xlinkHref="#SVGID_51_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M398 306.2H471.5V307.5H398z"
                              clipPath="url(#SVGID_52_)"
                            />
                          </g>
                          <path d="M398 269.9H471.5V270H398z" className="st0" />
                          <defs>
                            <path id="SVGID_53_" d="M471.5 269.9 471.5 270 509.2 270 509.2 269.9" />
                          </defs>
                          <clipPath id="SVGID_54_">
                            <use xlinkHref="#SVGID_53_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_54_)">
                            <defs>
                              <path
                                id="SVGID_55_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_56_">
                              <use xlinkHref="#SVGID_55_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M471.5 269.9H509.2V270H471.5z"
                              clipPath="url(#SVGID_56_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_57_"
                              d="M509.2 338.1v10.3h.1l.1.1v-10.3m-.2-68.3-.1 10.4h.1z"
                            />
                          </defs>
                          <clipPath id="SVGID_58_">
                            <use xlinkHref="#SVGID_57_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_58_)">
                            <defs>
                              <path
                                id="SVGID_59_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_60_">
                              <use xlinkHref="#SVGID_59_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M509.2 269.9H509.3V348.4H509.2z"
                              clipPath="url(#SVGID_60_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_61_"
                              d="M479.6 348.3 479.6 348.5 509.3 348.4 509.2 348.3"
                            />
                          </defs>
                          <clipPath id="SVGID_62_">
                            <use xlinkHref="#SVGID_61_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_62_)">
                            <defs>
                              <path
                                id="SVGID_63_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_64_">
                              <use xlinkHref="#SVGID_63_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M479.6 348.3H509.3V348.40000000000003H479.6z"
                              clipPath="url(#SVGID_64_)"
                            />
                          </g>
                          <path d="M471.6 348.3H479.6V348.40000000000003H471.6z" className="st0" />
                          <path d="M399.3 348.3H471.6V348.40000000000003H399.3z" className="st0" />
                          <defs>
                            <path id="SVGID_65_" d="M399.3 348.5v.5h80.4v-.5zm0-.7v.5h80.4v-.5z" />
                          </defs>
                          <clipPath id="SVGID_66_">
                            <use xlinkHref="#SVGID_65_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_66_)">
                            <defs>
                              <path
                                id="SVGID_67_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_68_">
                              <use xlinkHref="#SVGID_67_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M399.3 347.8H479.70000000000005V349H399.3z"
                              clipPath="url(#SVGID_68_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_69_"
                              d="M479.6 348.5v.5l30.3-.1-.5-.5m-29.8-.6v.5l29.6-.1-.5-.5h-29.1z"
                            />
                          </defs>
                          <clipPath id="SVGID_70_">
                            <use xlinkHref="#SVGID_69_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_70_)">
                            <defs>
                              <path
                                id="SVGID_71_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_72_">
                              <use xlinkHref="#SVGID_71_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M479.6 347.8H509.90000000000003V349H479.6z"
                              clipPath="url(#SVGID_72_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_73_"
                              d="M509.3 338.1v10.4h.1l.5.5v-10.9m-1.3 0v9.7h.1l.5.5v-10.2zm.5-68.1-.5.5v9.8h.5zm.8-.7-.5.5v10.5h.6z"
                            />
                          </defs>
                          <clipPath id="SVGID_74_">
                            <use xlinkHref="#SVGID_73_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_74_)">
                            <defs>
                              <path
                                id="SVGID_75_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_76_">
                              <use xlinkHref="#SVGID_75_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M508.6 269.3H509.90000000000003V349H508.6z"
                              clipPath="url(#SVGID_76_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_77_"
                              d="M471.5 270v.5l37.1-.1.5-.5m-37.6-.6v.6l37.8-.1.5-.5z"
                            />
                          </defs>
                          <clipPath id="SVGID_78_">
                            <use xlinkHref="#SVGID_77_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_78_)">
                            <defs>
                              <path
                                id="SVGID_79_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_80_">
                              <use xlinkHref="#SVGID_79_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M471.5 269.3H509.8V270.6H471.5z"
                              clipPath="url(#SVGID_80_)"
                            />
                          </g>
                          <defs>
                            <path id="SVGID_81_" d="M398 270v.5h73.5v-.5zm0-.7v.6h73.5v-.6z" />
                          </defs>
                          <clipPath id="SVGID_82_">
                            <use xlinkHref="#SVGID_81_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_82_)">
                            <defs>
                              <path
                                id="SVGID_83_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_84_">
                              <use xlinkHref="#SVGID_83_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M398 269.3H471.5V270.6H398z"
                              clipPath="url(#SVGID_84_)"
                            />
                          </g>
                          <path d="M510.4 267.5H517.8V567.8H510.4z" className="st43" />
                          <path d="M349.8 351H510.4V358.4H349.8z" className="st43" />
                          <path d="M193 421.8H196.5V421.90000000000003H193z" className="st43" />
                          <path d="M349.9 421.8H353.4V421.90000000000003H349.9z" className="st43" />
                          <path d="M196.5 421.8 349.9 421.8 349.9 422 196.5 422" className="st43" />
                          <path d="M431.7 358.4H432.5V422H431.7z" className="st43" />
                          <path d="M349.9 358.4H353.4V384.09999999999997H349.9z" className="st43" />
                          <path d="M189.3 133.7H196.60000000000002V142.2H189.3z" className="st43" />
                          <path d="M349.7 133.9H357V141.6H349.7z" className="st43" />
                          <path d="M510.4 134.2H517.8V137.79999999999998H510.4z" className="st43" />
                          <defs>
                            <path
                              id="SVGID_85_"
                              d="m191.1 338.6-.5.1c-3.4.4-6 3.5-6.1 6.9V374h9.7v-25.7h107.6V374h9.6v-29.1h-.1v-.7h-.1v-.2h-.1v-.2h-.1v-.3h-.1v-.2h-.1v-.3h-.1v-.2h-.1v-.1h-.1v-.1h-.1v-.1l-.1-.1h-.1v-.1h-.1v-.3l-.1-.1h-.1v-.1h-.1v-.1l-.1-.1h-.1v-.1h.4v-.1c-1.2-1.3-2.8-2.5-4.6-2.7l-.5-.1"
                            />
                          </defs>
                          <clipPath id="SVGID_86_">
                            <use xlinkHref="#SVGID_85_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_86_)">
                            <defs>
                              <path
                                id="SVGID_87_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_88_">
                              <use xlinkHref="#SVGID_87_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#2b4b9b"
                              d="M184.5 338.6H311.4V374H184.5z"
                              clipPath="url(#SVGID_88_)"
                            />
                          </g>
                          <path d="M520.3 46.5H669.0999999999999V50H520.3z" className="st0" />
                          <defs>
                            <path
                              id="SVGID_89_"
                              d="M521.3 50.4v.9h.1v.9h.1v1h.1v.8h.1v.9h.1v1h.1v.9h.1v.9h.1v1h.1v.3h.1v.4h.1v.4h.1v.4h.1v.1h.1v.2h.1v.2h.1v.3h.1v.1h.1v.2h.1v.2h.1v.2h.1l.1.1v.1h.1l.1.1v.1h.1l.1.1v.1h.1l.1.1v.1h.1l.1.1v.1h.1l.1.1v.2h.1v.1h.1l.5.5v.1h.1l.5.5v.1h.1c1.3 1.3 2.3 1.7 4.1 2.1l129.6.1v-.1l.5-.1c3.9-.5 7.1-3.6 7.5-7.5l.1-8.4"
                            />
                          </defs>
                          <clipPath id="SVGID_90_">
                            <use xlinkHref="#SVGID_89_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_90_)">
                            <defs>
                              <path
                                id="SVGID_91_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_92_">
                              <use xlinkHref="#SVGID_91_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#ef83b3"
                              d="M521.3 50.4H666.5V66.4H521.3z"
                              clipPath="url(#SVGID_92_)"
                            />
                          </g>
                          <path d="M187.4 34.3H198.5V45.199999999999996H187.4z" className="st43" />
                          <path d="M348 34.3H359.1V45.199999999999996H348z" className="st43" />
                          <path d="M508.6 34.3H519.7V45.199999999999996H508.6z" className="st43" />
                          <path d="M669.1 34.3H676.5V50H669.1z" className="st43" />
                          <path
                            d="M676.6 34.3H680.3000000000001V45.199999999999996H676.6z"
                            className="st43"
                          />
                          <path d="M667.3 134.2H678.1999999999999V141.6H667.3z" className="st43" />
                          <path d="M667.2 351H678.1V358.4H667.2z" className="st43" />
                          <defs>
                            <path
                              id="SVGID_93_"
                              d="M361.3 35.9v.2h-.6v8.5h36.6v-8.7m-37.5-1.6V46H399V34.3z"
                            />
                          </defs>
                          <clipPath id="SVGID_94_">
                            <use xlinkHref="#SVGID_93_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_94_)">
                            <defs>
                              <path
                                id="SVGID_95_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_96_">
                              <use xlinkHref="#SVGID_95_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="gray"
                              d="M359.8 34.3H399V46H359.8z"
                              clipPath="url(#SVGID_96_)"
                            />
                          </g>
                          <path d="M359.1 46.5H505.90000000000003V50H359.1z" className="st0" />
                          <defs>
                            <path
                              id="SVGID_97_"
                              d="M200.7 35.9v8.7h33.7v-8.7zm-1.6-1.6V46H236V34.3z"
                            />
                          </defs>
                          <clipPath id="SVGID_98_">
                            <use xlinkHref="#SVGID_97_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_98_)">
                            <defs>
                              <path
                                id="SVGID_99_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_100_">
                              <use xlinkHref="#SVGID_99_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="gray"
                              d="M199.1 34.3H236V46H199.1z"
                              clipPath="url(#SVGID_100_)"
                            />
                          </g>
                          <path d="M198.5 46.5 348 46.5 348 50 198.5 50" className="st0" />
                          <defs>
                            <path
                              id="SVGID_101_"
                              d="M200.1 50.4v.9h.1v.9h.1v1h.1v.8h.1v.9h.1v1h.1v.9h.1v.9h.1v1h.1v.3h.1v.4h.1v.4h.1v.4h.1v.1h.1v.2h.1v.2h.1v.3h.1v.1h.1v.2h.1v.2h.1v.2h.1l.1.1v.1h.1v.1h.1l.1.1v.1h.1v.1h.1l.1.1v.1h.1v.1h.1l.1.1v.3h.1v.1h.1l.5.5v.1h.1l.5.5v.1h.1c1.3 1.1 2.3 1.8 4.1 2.1l129.6.1v-.1l.5-.1c3.8-.4 7.1-3.6 7.5-7.5l.1-8.4"
                            />
                          </defs>
                          <clipPath id="SVGID_102_">
                            <use xlinkHref="#SVGID_101_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_102_)">
                            <defs>
                              <path
                                id="SVGID_103_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_104_">
                              <use xlinkHref="#SVGID_103_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#ef83b3"
                              d="M200.1 50.4 345.3 50.4 345.3 66.5 200.1 66.5"
                              clipPath="url(#SVGID_104_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_105_"
                              d="M670 53.4v36h8.4v-36zm-1.6-1.7v39.2h11.7V51.7z"
                            />
                          </defs>
                          <clipPath id="SVGID_106_">
                            <use xlinkHref="#SVGID_105_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_106_)">
                            <defs>
                              <path
                                id="SVGID_107_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_108_">
                              <use xlinkHref="#SVGID_107_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="gray"
                              d="M668.4 51.7H680.1V90.9H668.4z"
                              clipPath="url(#SVGID_108_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_109_"
                              d="M670 145.9v36h8.4v-36zm-1.6-1.6v39.2h11.7v-39.2z"
                            />
                          </defs>
                          <clipPath id="SVGID_110_">
                            <use xlinkHref="#SVGID_109_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_110_)">
                            <defs>
                              <path
                                id="SVGID_111_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_112_">
                              <use xlinkHref="#SVGID_111_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="gray"
                              d="M668.4 144.3H680.1V183.5H668.4z"
                              clipPath="url(#SVGID_112_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_113_"
                              d="M670 361.1v36h8.4v-36zm-1.6-1.7v39.2h11.7v-39.2z"
                            />
                          </defs>
                          <clipPath id="SVGID_114_">
                            <use xlinkHref="#SVGID_113_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_114_)">
                            <defs>
                              <path
                                id="SVGID_115_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_116_">
                              <use xlinkHref="#SVGID_115_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="gray"
                              d="M668.4 359.4H680.1V398.59999999999997H668.4z"
                              clipPath="url(#SVGID_116_)"
                            />
                          </g>
                          <path d="M667.2 567.8H678.1V575.1999999999999H667.2z" className="st43" />
                          <path d="M360.7 36.1H397.3V44.6H360.7z" className="st0" />
                          <path d="M200.7 36.1H234.39999999999998V44.6H200.7z" className="st0" />
                          <path d="M373.4 264.3H508.29999999999995V267.2H373.4z" className="st0" />
                          <defs>
                            <path
                              id="SVGID_117_"
                              d="M233.2 140.4 233.2 140.9 233.8 140.9 233.8 140.5 233.6 140.4"
                            />
                          </defs>
                          <clipPath id="SVGID_118_">
                            <use xlinkHref="#SVGID_117_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_118_)">
                            <defs>
                              <path
                                id="SVGID_119_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_120_">
                              <use xlinkHref="#SVGID_119_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M233.2 140.4H233.7V140.8H233.2z"
                              clipPath="url(#SVGID_120_)"
                            />
                          </g>
                          <path d="M140.2 134.8H182V142.20000000000002H140.2z" className="st0" />
                          <path d="M517.8 569.7H667.1999999999999V573.2H517.8z" className="st0" />
                          <defs>
                            <path
                              id="SVGID_121_"
                              d="M518 347.1 518.4 347.5 518.6 347.5 518.6 347.5 518.3 347.1"
                            />
                          </defs>
                          <clipPath id="SVGID_122_">
                            <use xlinkHref="#SVGID_121_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_122_)">
                            <defs>
                              <path
                                id="SVGID_123_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_124_">
                              <use xlinkHref="#SVGID_123_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M518 347.1H518.6V347.5H518z"
                              clipPath="url(#SVGID_124_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_125_"
                              d="M518 346.2 518 347.1 518.2 347.1 518.2 346.9 518.3 346.5 518.4 346.2"
                            />
                          </defs>
                          <clipPath id="SVGID_126_">
                            <use xlinkHref="#SVGID_125_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_126_)">
                            <defs>
                              <path
                                id="SVGID_127_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_128_">
                              <use xlinkHref="#SVGID_127_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M518 346.2H518.4V347.09999999999997H518z"
                              clipPath="url(#SVGID_128_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_129_"
                              d="M519.3 411.3 519.4 411.4 519.4 411.6 519.5 411.6 519.6 411.6 519.6 411.8 519.9 411.7 519.4 411.3"
                            />
                          </defs>
                          <clipPath id="SVGID_130_">
                            <use xlinkHref="#SVGID_129_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_130_)">
                            <defs>
                              <path
                                id="SVGID_131_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_132_">
                              <use xlinkHref="#SVGID_131_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M519.3 411.3H519.8V411.8H519.3z"
                              clipPath="url(#SVGID_132_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_133_"
                              d="M519.2 410.4 519.2 411.1 519.2 411.1 519.2 411.3 519.4 411.3 519.4 411.2 519.5 410.7 519.6 410.4"
                            />
                          </defs>
                          <clipPath id="SVGID_134_">
                            <use xlinkHref="#SVGID_133_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_134_)">
                            <defs>
                              <path
                                id="SVGID_135_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_136_">
                              <use xlinkHref="#SVGID_135_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M519.2 410.4H519.6V411.29999999999995H519.2z"
                              clipPath="url(#SVGID_136_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_137_"
                              d="M183.4 421.8 183.4 425.4 184 425.4 184 422 193 422 193 421.8"
                            />
                          </defs>
                          <clipPath id="SVGID_138_">
                            <use xlinkHref="#SVGID_137_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_138_)">
                            <defs>
                              <path
                                id="SVGID_139_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_140_">
                              <use xlinkHref="#SVGID_139_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M183.4 421.8H193V425.3H183.4z"
                              clipPath="url(#SVGID_140_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_141_"
                              d="m375.7 363-.8.1-.3.1-1.2.2-1 .3-.3.1-1.2.6-.1.1-.1.1c-.1.1-.6.4-.7.5l-.1.1-.4.4.2.1.1.1.4.1v-.1l.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1c.5-.3 1.1-.7 1.7-.8l.2-.1.3-.1.4-.1.4-.1 1-.2h3.2l.3.1.3.1.3.1.8.2c.9.3 1.8.6 2.4 1.2l.1.1.5.5v.1h.1l.3.3v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.3h.1l-.1.7c-.4 2.5-4.5 3.7-6.6 3.7l-1.5.1v-.1l-.8-.1c-1.8-.4-3.1-.6-4.6-1.8h-.1v-.1l-.3-.3h-.1v-.1l-.3-.3h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1l-.1-.1h-.1v-.7l-.1-.1.1-.7.1-.3-.4-.2h-.1l-.1.1-.1.1-.1.1-.1 1 .1.1v.5h.1v.5h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1l.7.7v.1h.1c1.7 1.3 3.9 2 6.1 2l.5.1v-.1l.9-.1c2.5-.1 6.6-1.5 7.1-4.3l.1-.9h-.1v-.5h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1.1h-.1v-.1c-1.4-1.8-3.7-2.6-5.9-2.8l-.7-.1"
                            />
                          </defs>
                          <clipPath id="SVGID_142_">
                            <use xlinkHref="#SVGID_141_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_142_)">
                            <defs>
                              <path
                                id="SVGID_143_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_144_">
                              <use xlinkHref="#SVGID_143_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M368.5 363H384.5V372.7H368.5z"
                              clipPath="url(#SVGID_144_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_145_"
                              d="m375.3 364-.7.1-1.2.2c-.2.1-.6.2-.8.3l-.4.1-1 .5c-.1.1-.6.4-.7.5l-.1.1-.1.1 1 .5-.4.8v.1l-.2-.1-.8-.4h-.1l-.1.2-.1.3-.1.3.1.1v.3h.1v.4h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1c1.5 1.6 3.8 2.2 5.9 2.4l1.3.1v-.1l.7-.1c1.8-.2 5-1.2 5.6-3.1l.1-1h-.1v-.3h-.1v.2h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1l-.2-.2h-.1v-.3c-1-1-2.8-1.7-4.2-1.9l-.4-.1"
                            />
                          </defs>
                          <clipPath id="SVGID_146_">
                            <use xlinkHref="#SVGID_145_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_146_)">
                            <defs>
                              <path
                                id="SVGID_147_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_148_">
                              <use xlinkHref="#SVGID_147_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M369.4 364H383.5V371.7H369.4z"
                              clipPath="url(#SVGID_148_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_149_"
                              d="M366.1 364.1 366.1 364.2 365.7 365 365.9 365.1 368.1 366.1 368.3 366.2 370.6 367.4 370.8 367.4 370.8 367.3 371.2 366.5 368.9 365.3 368.7 365.3 366.4 364.1"
                            />
                          </defs>
                          <clipPath id="SVGID_150_">
                            <use xlinkHref="#SVGID_149_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_150_)">
                            <defs>
                              <path
                                id="SVGID_151_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_152_">
                              <use xlinkHref="#SVGID_151_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M365.7 364.1H371.2V367.40000000000003H365.7z"
                              clipPath="url(#SVGID_152_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_153_"
                              d="m408.4 363-.8.1-1.6.3-1 .3-.3.1-.1.1-1.2.6-.2.2-.1.1-.1.1-.1.1-.1.1-.1.1-.5.5.2.1.3.1.2.1v-.1c3-2.9 10.2-2.9 13.1.1v.1h.1l.3.3v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1l-.1 1.4c-1 2.4-4.2 3.2-6.5 3.4l-1.5.1v-.1l-.8-.1c-1.6-.3-3.3-.7-4.6-1.8h-.1v-.1l-.3-.3h-.1v-.1l-.3-.3h-.1v-.1h-.1v-.1h-.5v-.2l-.1-.1h-.1v-.4h-.1v-.3l-.1-.1.1-.3.1-.4.1-.3-.4-.2h-.2l-.1.3-.1 1 .1.1v.5h.1v.5h.1l.1.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1l.3.3v.1h.1l.3.3v.1h.1c1.6 1.3 4 2 6.1 2l.5.1v-.1l1.6-.1c2.2-.3 6-1.6 6.4-4.3l.1-.9h-.1v-.5h-.5v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1l-.1-.1h-.1v-.1c-1.5-1.7-3.7-2.6-5.9-2.8l-.7-.1"
                            />
                          </defs>
                          <clipPath id="SVGID_154_">
                            <use xlinkHref="#SVGID_153_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_154_)">
                            <defs>
                              <path
                                id="SVGID_155_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_156_">
                              <use xlinkHref="#SVGID_155_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M401.1 363H417.1V372.7H401.1z"
                              clipPath="url(#SVGID_156_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_157_"
                              d="m407.8 364-.7.1-1.2.2-.1.1-.2.1-.1.1-.2.1-.1.1-.4.1-1 .5-.3.3-.1.1-.2.2-.1.1-.1.1 1 .5-.4.8v.1l-.2-.1-.8-.4h-.1l-.1.1-.1.1-.1.6.1.1v.3h.1v.4h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1l.5.5v.1h.1c1.5 1.1 3.4 1.7 5.2 1.8l1.3.1v-.1l.7-.1c1.9-.2 5.5-1.3 5.7-3.5l.1-.6h-.1v-.3h-.5v-.2h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1c-1-1.3-3.1-2.1-4.7-2.2l-.6-.1"
                            />
                          </defs>
                          <clipPath id="SVGID_158_">
                            <use xlinkHref="#SVGID_157_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_158_)">
                            <defs>
                              <path
                                id="SVGID_159_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_160_">
                              <use xlinkHref="#SVGID_159_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M402 364H416.1V371.7H402z"
                              clipPath="url(#SVGID_160_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_161_"
                              d="m398.7 364.1-.5.9.2.1c1.6.8 3.2 1.5 4.8 2.3l.2.1v-.1l.4-.8-1.5-.7-.2-.1-1.5-.7-.2-.1-1.5-.7"
                            />
                          </defs>
                          <clipPath id="SVGID_162_">
                            <use xlinkHref="#SVGID_161_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_162_)">
                            <defs>
                              <path
                                id="SVGID_163_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_164_">
                              <use xlinkHref="#SVGID_163_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M398.2 364.1H403.8V367.40000000000003H398.2z"
                              clipPath="url(#SVGID_164_)"
                            />
                          </g>
                          <path d="M198.6 136.4H234V137.20000000000002H198.6z" className="st0" />
                          <path d="M235.8 136.4H272.2V137.20000000000002H235.8z" className="st0" />
                          <path d="M274.1 136.4H310.5V137.20000000000002H274.1z" className="st0" />
                          <path
                            d="M312.4 136.4H347.79999999999995V137.20000000000002H312.4z"
                            className="st0"
                          />
                          <defs>
                            <path
                              id="SVGID_165_"
                              d="M198.6 137.2v3.2H234v-3.2zm0-1.6v.8H234v-.8z"
                            />
                          </defs>
                          <clipPath id="SVGID_166_">
                            <use xlinkHref="#SVGID_165_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_166_)">
                            <defs>
                              <path
                                id="SVGID_167_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_168_">
                              <use xlinkHref="#SVGID_167_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M198.6 135.6H234V140.4H198.6z"
                              clipPath="url(#SVGID_168_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_169_"
                              d="M235.8 137.2v3.2h36.4v-3.2zm0-1.6v.8h36.4v-.8z"
                            />
                          </defs>
                          <clipPath id="SVGID_170_">
                            <use xlinkHref="#SVGID_169_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_170_)">
                            <defs>
                              <path
                                id="SVGID_171_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_172_">
                              <use xlinkHref="#SVGID_171_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M235.8 135.6H272.2V140.4H235.8z"
                              clipPath="url(#SVGID_172_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_173_"
                              d="M312.4 137.2v3.2h35.4v-3.2zm0-1.6v.8h35.4v-.8z"
                            />
                          </defs>
                          <clipPath id="SVGID_174_">
                            <use xlinkHref="#SVGID_173_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_174_)">
                            <defs>
                              <path
                                id="SVGID_175_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_176_">
                              <use xlinkHref="#SVGID_175_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M312.4 135.6H347.79999999999995V140.4H312.4z"
                              clipPath="url(#SVGID_176_)"
                            />
                          </g>
                          <path d="M347.7 135.6H349.7V140.4H347.7z" className="st0" />
                          <path d="M196.6 135.6H198.6V140.4H196.6z" className="st0" />
                          <path d="M233.9 135.6H235.8V140.4H233.9z" className="st0" />
                          <path d="M272.2 135.6H274.09999999999997V140.4H272.2z" className="st0" />
                          <path d="M310.5 135.6H312.4V140.4H310.5z" className="st0" />
                          <path d="M359 136.2H394.4V137H359z" className="st0" />
                          <path d="M396.4 136.2H432.79999999999995V137H396.4z" className="st0" />
                          <path d="M434.7 136.2H471.09999999999997V137H434.7z" className="st0" />
                          <path d="M473.1 136.2H508.5V137H473.1z" className="st0" />
                          <defs>
                            <path
                              id="SVGID_177_"
                              d="M359 137.1v3.2h35.4v-3.2zm0-1.7v.8h35.4v-.8z"
                            />
                          </defs>
                          <clipPath id="SVGID_178_">
                            <use xlinkHref="#SVGID_177_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_178_)">
                            <defs>
                              <path
                                id="SVGID_179_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_180_">
                              <use xlinkHref="#SVGID_179_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M359 135.4H394.4V140.20000000000002H359z"
                              clipPath="url(#SVGID_180_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_181_"
                              d="M396.4 137.1v3.2h36.4v-3.2zm0-1.7v.8h36.4v-.8z"
                            />
                          </defs>
                          <clipPath id="SVGID_182_">
                            <use xlinkHref="#SVGID_181_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_182_)">
                            <defs>
                              <path
                                id="SVGID_183_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_184_">
                              <use xlinkHref="#SVGID_183_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M396.4 135.4H432.79999999999995V140.20000000000002H396.4z"
                              clipPath="url(#SVGID_184_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_185_"
                              d="M434.7 137.1v3.2h36.4v-3.2zm0-1.7v.8h36.4v-.8z"
                            />
                          </defs>
                          <clipPath id="SVGID_186_">
                            <use xlinkHref="#SVGID_185_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_186_)">
                            <defs>
                              <path
                                id="SVGID_187_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_188_">
                              <use xlinkHref="#SVGID_187_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M434.7 135.4H471.09999999999997V140.20000000000002H434.7z"
                              clipPath="url(#SVGID_188_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_189_"
                              d="M473.1 137.1v3.2h35.4v-3.2zm0-1.7v.8h35.4v-.8z"
                            />
                          </defs>
                          <clipPath id="SVGID_190_">
                            <use xlinkHref="#SVGID_189_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_190_)">
                            <defs>
                              <path
                                id="SVGID_191_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_192_">
                              <use xlinkHref="#SVGID_191_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M473.1 135.4H508.5V140.20000000000002H473.1z"
                              clipPath="url(#SVGID_192_)"
                            />
                          </g>
                          <path d="M508.5 135.4H510.4V140.20000000000002H508.5z" className="st0" />
                          <path d="M357 135.4H359V140.20000000000002H357z" className="st0" />
                          <path d="M394.4 135.4H396.4V140.20000000000002H394.4z" className="st0" />
                          <path d="M432.8 135.4H434.8V140.20000000000002H432.8z" className="st0" />
                          <path d="M471.1 135.4H473.1V140.20000000000002H471.1z" className="st0" />
                          <path d="M514.9 139.7H515.6999999999999V180.1H514.9z" className="st0" />
                          <path d="M514.9 182H515.6999999999999V223.3H514.9z" className="st0" />
                          <path d="M514.9 225.2H515.6999999999999V265.5H514.9z" className="st0" />
                          <defs>
                            <path
                              id="SVGID_193_"
                              d="M515.7 141.3V180h.8v-38.7zm-4 0V180h3.2v-38.7z"
                            />
                          </defs>
                          <clipPath id="SVGID_194_">
                            <use xlinkHref="#SVGID_193_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_194_)">
                            <defs>
                              <path
                                id="SVGID_195_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_196_">
                              <use xlinkHref="#SVGID_195_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M511.7 141.3H516.5V180H511.7z"
                              clipPath="url(#SVGID_196_)"
                            />
                          </g>
                          <defs>
                            <path id="SVGID_197_" d="M515.7 182v41.3h.8V182zm-4 0v41.3h3.2V182z" />
                          </defs>
                          <clipPath id="SVGID_198_">
                            <use xlinkHref="#SVGID_197_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_198_)">
                            <defs>
                              <path
                                id="SVGID_199_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_200_">
                              <use xlinkHref="#SVGID_199_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M511.7 182H516.5V223.3H511.7z"
                              clipPath="url(#SVGID_200_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_201_"
                              d="M515.7 225.2v40.3h.8v-40.3zm-4 0v40.3h3.2v-40.3z"
                            />
                          </defs>
                          <clipPath id="SVGID_202_">
                            <use xlinkHref="#SVGID_201_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_202_)">
                            <defs>
                              <path
                                id="SVGID_203_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_204_">
                              <use xlinkHref="#SVGID_203_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M511.7 225.2H516.5V265.5H511.7z"
                              clipPath="url(#SVGID_204_)"
                            />
                          </g>
                          <path d="M511.7 265.5H516.5V267.5H511.7z" className="st0" />
                          <path d="M511.7 180.1H516.5V182H511.7z" className="st0" />
                          <path d="M511.7 223.3H516.5V225.20000000000002H511.7z" className="st0" />
                          <defs>
                            <path
                              id="SVGID_205_"
                              d="M510.4 137.8 510.4 141.3 514.9 141.3 514.9 139.7 515.7 139.7 515.7 141.3 517.8 141.3 517.8 137.8"
                            />
                          </defs>
                          <clipPath id="SVGID_206_">
                            <use xlinkHref="#SVGID_205_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_206_)">
                            <defs>
                              <path
                                id="SVGID_207_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_208_">
                              <use xlinkHref="#SVGID_207_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M510.4 137.8H517.8V141.3H510.4z"
                              clipPath="url(#SVGID_208_)"
                            />
                          </g>
                          <path fill="#67b32e" d="M508.3 280.3H509.90000000000003V338.1H508.3z" />
                          <defs>
                            <path
                              id="SVGID_209_"
                              d="M311.4 35.9v8.7h33.7v-8.7zm-1.6-1.6V46h36.9V34.3z"
                            />
                          </defs>
                          <clipPath id="SVGID_210_">
                            <use xlinkHref="#SVGID_209_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_210_)">
                            <defs>
                              <path
                                id="SVGID_211_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_212_">
                              <use xlinkHref="#SVGID_211_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="gray"
                              d="M309.8 34.3H346.7V46H309.8z"
                              clipPath="url(#SVGID_212_)"
                            />
                          </g>
                          <path d="M311.4 36.1H345.09999999999997V44.6H311.4z" className="st0" />
                          <defs>
                            <path
                              id="SVGID_213_"
                              d="M258.1 35.9v8.7h33.7v-8.7zm-1.6-1.6V46h36.9V34.3z"
                            />
                          </defs>
                          <clipPath id="SVGID_214_">
                            <use xlinkHref="#SVGID_213_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_214_)">
                            <defs>
                              <path
                                id="SVGID_215_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_216_">
                              <use xlinkHref="#SVGID_215_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="gray"
                              d="M256.5 34.3H293.4V46H256.5z"
                              clipPath="url(#SVGID_216_)"
                            />
                          </g>
                          <path d="M258.1 36.1H291.8V44.6H258.1z" className="st0" />
                          <defs>
                            <path
                              id="SVGID_217_"
                              d="M469.3 35.9v8.7h36v-8.7zm-1.7-1.6V46h39.2V34.3z"
                            />
                          </defs>
                          <clipPath id="SVGID_218_">
                            <use xlinkHref="#SVGID_217_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_218_)">
                            <defs>
                              <path
                                id="SVGID_219_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_220_">
                              <use xlinkHref="#SVGID_219_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="gray"
                              d="M467.6 34.3H506.8V46H467.6z"
                              clipPath="url(#SVGID_220_)"
                            />
                          </g>
                          <path d="M469.3 36.1H505.3V44.6H469.3z" className="st0" />
                          <defs>
                            <path
                              id="SVGID_221_"
                              d="M417.7 35.9v.2h-.6v8.5h36.6v-8.7m-37.6-1.6V46h39.2V34.3z"
                            />
                          </defs>
                          <clipPath id="SVGID_222_">
                            <use xlinkHref="#SVGID_221_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_222_)">
                            <defs>
                              <path
                                id="SVGID_223_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_224_">
                              <use xlinkHref="#SVGID_223_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="gray"
                              d="M416.1 34.3H455.3V46H416.1z"
                              clipPath="url(#SVGID_224_)"
                            />
                          </g>
                          <path d="M417.1 36.1H453.70000000000005V44.6H417.1z" className="st0" />
                          <defs>
                            <path
                              id="SVGID_225_"
                              d="M523.2 35.9v8.7h36v-8.7zm-1.6-1.6V46h39.2V34.3z"
                            />
                          </defs>
                          <clipPath id="SVGID_226_">
                            <use xlinkHref="#SVGID_225_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_226_)">
                            <defs>
                              <path
                                id="SVGID_227_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_228_">
                              <use xlinkHref="#SVGID_227_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="gray"
                              d="M521.6 34.3H560.8000000000001V46H521.6z"
                              clipPath="url(#SVGID_228_)"
                            />
                          </g>
                          <path d="M523.2 36.1H559.2V44.6H523.2z" className="st0" />
                          <defs>
                            <path
                              id="SVGID_229_"
                              d="M581.6 35.9v8.7h36v-8.7zm-1.5-1.6V46h39.2V34.3z"
                            />
                          </defs>
                          <clipPath id="SVGID_230_">
                            <use xlinkHref="#SVGID_229_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_230_)">
                            <defs>
                              <path
                                id="SVGID_231_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_232_">
                              <use xlinkHref="#SVGID_231_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="gray"
                              d="M580.1 34.3H619.3000000000001V46H580.1z"
                              clipPath="url(#SVGID_232_)"
                            />
                          </g>
                          <path d="M581.6 36.1H617.6V44.6H581.6z" className="st0" />
                          <defs>
                            <path
                              id="SVGID_233_"
                              d="M631.1 35.9v8.7h36v-8.7zm-1.6-1.6V46h39.2V34.3z"
                            />
                          </defs>
                          <clipPath id="SVGID_234_">
                            <use xlinkHref="#SVGID_233_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_234_)">
                            <defs>
                              <path
                                id="SVGID_235_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_236_">
                              <use xlinkHref="#SVGID_235_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="gray"
                              d="M629.5 34.3H668.7V46H629.5z"
                              clipPath="url(#SVGID_236_)"
                            />
                          </g>
                          <path d="M631.1 36.1H667.1V44.6H631.1z" className="st0" />
                          <defs>
                            <path
                              id="SVGID_237_"
                              d="M670 95.1v36h8.4v-36zm-1.6-1.6v39.2h11.7V93.5z"
                            />
                          </defs>
                          <clipPath id="SVGID_238_">
                            <use xlinkHref="#SVGID_237_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_238_)">
                            <defs>
                              <path
                                id="SVGID_239_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_240_">
                              <use xlinkHref="#SVGID_239_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="gray"
                              d="M668.4 93.5H680.1V132.7H668.4z"
                              clipPath="url(#SVGID_240_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_241_"
                              d="M670 312.2v36h8.4v-36zm-1.6-1.6v39.2h11.7v-39.2z"
                            />
                          </defs>
                          <clipPath id="SVGID_242_">
                            <use xlinkHref="#SVGID_241_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_242_)">
                            <defs>
                              <path
                                id="SVGID_243_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_244_">
                              <use xlinkHref="#SVGID_243_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="gray"
                              d="M668.4 310.6H680.1V349.8H668.4z"
                              clipPath="url(#SVGID_244_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_245_"
                              d="M670 272.4v36h8.4v-36zm-1.6-1.6V310h11.7v-39.2z"
                            />
                          </defs>
                          <clipPath id="SVGID_246_">
                            <use xlinkHref="#SVGID_245_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_246_)">
                            <defs>
                              <path
                                id="SVGID_247_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_248_">
                              <use xlinkHref="#SVGID_247_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="gray"
                              d="M668.4 270.8H680.1V310H668.4z"
                              clipPath="url(#SVGID_248_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_249_"
                              d="M670 231.2v36h8.4v-36zm-1.6-1.6v39.2h11.7v-39.2z"
                            />
                          </defs>
                          <clipPath id="SVGID_250_">
                            <use xlinkHref="#SVGID_249_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_250_)">
                            <defs>
                              <path
                                id="SVGID_251_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_252_">
                              <use xlinkHref="#SVGID_251_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="gray"
                              d="M668.4 229.6H680.1V268.8H668.4z"
                              clipPath="url(#SVGID_252_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_253_"
                              d="M670 186.9v36h8.4v-36zm-1.6-1.7v39.2h11.7v-39.2z"
                            />
                          </defs>
                          <clipPath id="SVGID_254_">
                            <use xlinkHref="#SVGID_253_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_254_)">
                            <defs>
                              <path
                                id="SVGID_255_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_256_">
                              <use xlinkHref="#SVGID_255_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="gray"
                              d="M668.4 185.2H680.1V224.39999999999998H668.4z"
                              clipPath="url(#SVGID_256_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_257_"
                              d="M670 529.4v36h8.4v-36zm-1.6-1.7v39.2h11.7v-39.2z"
                            />
                          </defs>
                          <clipPath id="SVGID_258_">
                            <use xlinkHref="#SVGID_257_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_258_)">
                            <defs>
                              <path
                                id="SVGID_259_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_260_">
                              <use xlinkHref="#SVGID_259_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="gray"
                              d="M668.4 527.7H680.1V566.9000000000001H668.4z"
                              clipPath="url(#SVGID_260_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_261_"
                              d="M670 402.8v36h8.4v-36zm-1.6-1.6v39.2h11.7v-39.2z"
                            />
                          </defs>
                          <clipPath id="SVGID_262_">
                            <use xlinkHref="#SVGID_261_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_262_)">
                            <defs>
                              <path
                                id="SVGID_263_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_264_">
                              <use xlinkHref="#SVGID_263_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="gray"
                              d="M668.4 401.2H680.1V440.4H668.4z"
                              clipPath="url(#SVGID_264_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_265_"
                              d="M670 444.5v36h8.4v-36zm-1.6-1.5v39.2h11.7V443z"
                            />
                          </defs>
                          <clipPath id="SVGID_266_">
                            <use xlinkHref="#SVGID_265_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_266_)">
                            <defs>
                              <path
                                id="SVGID_267_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_268_">
                              <use xlinkHref="#SVGID_267_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="gray"
                              d="M668.4 443H680.1V482.2H668.4z"
                              clipPath="url(#SVGID_268_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_269_"
                              d="M670 487v36h8.4v-36zm-1.6-1.7v39.2h11.7v-39.2z"
                            />
                          </defs>
                          <clipPath id="SVGID_270_">
                            <use xlinkHref="#SVGID_269_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_270_)">
                            <defs>
                              <path
                                id="SVGID_271_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_272_">
                              <use xlinkHref="#SVGID_271_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="gray"
                              d="M668.4 485.3H680.1V524.5H668.4z"
                              clipPath="url(#SVGID_272_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_273_"
                              d="M567.6 534.9 567.6 535.1 567.7 535.2 567.9 535.3 568.2 535.4 568.3 535.5 568.4 535.6 568.4 535.4 568.5 535.2 568.3 535.1 567.9 534.9"
                            />
                          </defs>
                          <clipPath id="SVGID_274_">
                            <use xlinkHref="#SVGID_273_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_274_)">
                            <defs>
                              <path
                                id="SVGID_275_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_276_">
                              <use xlinkHref="#SVGID_275_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M567.6 534.9H568.5V535.5H567.6z"
                              clipPath="url(#SVGID_276_)"
                            />
                          </g>
                          <path d="M126.9 340.4 130.4 336.8" className="st141" />
                          <path d="M126.9 356.5 130.4 353" className="st141" />
                          <path d="M126.9 372.7 130.4 369.1" className="st141" />
                          <path d="M126.9 388.9 130.4 385.3" className="st141" />
                          <path d="M126.9 405 130.4 401.4" className="st141" />
                          <path d="M126.9 421.1 130.4 417.6" className="st141" />
                          <path d="M126.9 437.3 130.4 433.7" className="st141" />
                          <path d="M126.9 328.1 130.2 324.8" className="st141" />
                          <path d="M126.9 344.3 130.4 340.7" className="st141" />
                          <path d="M126.9 360.4 130.4 356.9" className="st141" />
                          <path d="M126.9 376.6 130.4 373.1" className="st141" />
                          <path d="M126.9 392.7 130.4 389.2" className="st141" />
                          <path d="M126.9 408.9 130.4 405.4" className="st141" />
                          <path d="M126.9 425 130.4 421.5" className="st141" />
                          <path d="M128.6 439.5 130.4 437.7" className="st141" />
                          <path d="M126.6 328.4 126.9 328.1" className="st141" />
                          <path d="M135.8 439.5 133.3 437" className="st142" />
                          <path d="M136.8 436.5 133.3 433" className="st142" />
                          <path d="M136.8 432.4 133.3 428.9" className="st142" />
                          <path d="M136.8 428.4 133.7 425.4" className="st142" />
                          <path d="M136.7 439.5 133.3 436" className="st142" />
                          <path d="M136.8 435.5 133.3 432" className="st142" />
                          <path d="M136.8 431.5 133.3 427.9" className="st142" />
                          <path d="M136.8 427.5 134.7 425.4" className="st142" />
                          <path d="M184.2 425.4 187.6 422" className="st142" />
                          <path d="M188.2 425.4 191.6 422" className="st142" />
                          <path d="M192.2 425.4 193 424.5" className="st142" />
                          <path d="M184 422.5 184.5 422" className="st142" />
                          <path d="M185.2 425.3 188.5 422" className="st142" />
                          <path d="M189.2 425.4 192.5 422" className="st142" />
                          <path d="M510.4 434.7 510.4 434.7" className="st143" />
                          <path d="M130.4 439.5 130.4 437.1" className="st144" />
                          <path d="M130.4 435.2 130.4 433.2" className="st144" />
                          <path d="M130.4 431.3 130.4 429.4" className="st144" />
                          <path d="M130.4 427.4 130.4 425.5" className="st144" />
                          <path d="M130.4 423.6 130.4 421.6" className="st144" />
                          <path d="M130.4 419.7 130.4 417.8" className="st144" />
                          <path d="M130.4 415.8 130.4 413.9" className="st144" />
                          <path d="M130.4 412 130.4 410.1" className="st144" />
                          <path d="M130.4 408.2 130.4 406.3" className="st144" />
                          <path d="M130.4 404.3 130.4 402.4" className="st144" />
                          <path d="M130.4 400.5 130.4 398.5" className="st144" />
                          <path d="M130.4 396.6 130.4 394.7" className="st144" />
                          <path d="M130.4 392.7 130.4 390.8" className="st144" />
                          <path d="M130.4 388.9 130.4 387" className="st144" />
                          <path d="M130.4 385 130.4 383.1" className="st144" />
                          <path d="M130.4 381.2 130.4 379.3" className="st144" />
                          <path d="M130.4 377.3 130.4 375.4" className="st144" />
                          <path d="M130.4 373.5 130.4 371.5" className="st144" />
                          <path d="M130.4 369.6 130.4 367.7" className="st144" />
                          <path d="M130.4 365.7 130.4 363.8" className="st144" />
                          <path d="M130.4 361.9 130.4 360" className="st144" />
                          <path d="M130.4 358.1 130.4 356.2" className="st144" />
                          <path d="M130.4 354.2 130.4 352.3" className="st144" />
                          <path d="M130.4 350.4 130.4 348.4" className="st144" />
                          <path d="M130.4 346.5 130.4 344.6" className="st144" />
                          <path d="M130.4 342.6 130.4 340.7" className="st144" />
                          <path d="M130.4 338.8 130.4 336.8" className="st144" />
                          <path d="M130.4 334.9 130.4 333" className="st144" />
                          <path d="M130.4 331.1 130.4 329.2" className="st144" />
                          <path d="M130.4 327.2 130.4 324.8 126.9 324.8" className="st144" />
                          <path d="M126.9 328.4 126.9 330.5" className="st144" />
                          <path d="M126.9 332.4 126.9 334.3" className="st144" />
                          <path d="M126.9 336.2 126.9 338.2" className="st144" />
                          <path d="M126.9 340.1 126.9 342" className="st144" />
                          <path d="M126.9 344 126.9 345.9" className="st144" />
                          <path d="M126.9 347.8 126.9 349.8" className="st144" />
                          <path d="M126.9 351.7 126.9 353.6" className="st144" />
                          <path d="M126.9 355.5 126.9 357.4" className="st144" />
                          <path d="M126.9 359.4 126.9 361.3" className="st144" />
                          <path d="M126.9 363.2 126.9 365.2" className="st144" />
                          <path d="M126.9 367.1 126.9 369" className="st144" />
                          <path d="M126.9 371 126.9 372.9" className="st144" />
                          <path d="M126.9 374.8 126.9 376.8" className="st144" />
                          <path d="M126.9 378.7 126.9 380.6" className="st144" />
                          <path d="M126.9 382.5 126.9 384.4" className="st144" />
                          <path d="M126.9 386.3 126.9 388.3" className="st144" />
                          <path d="M126.9 390.2 126.9 392.1" className="st144" />
                          <path d="M126.9 394.1 126.9 396" className="st144" />
                          <path d="M126.9 397.9 126.9 399.9" className="st144" />
                          <path d="M126.9 401.8 126.9 403.7" className="st144" />
                          <path d="M126.9 405.6 126.9 407.6" className="st144" />
                          <path d="M126.9 409.5 126.9 411.4" className="st144" />
                          <path d="M126.9 413.3 126.9 415.3" className="st144" />
                          <path d="M126.9 417.2 126.9 419.1" className="st144" />
                          <path d="M126.9 421.1 126.9 423" className="st144" />
                          <path d="M126.9 424.9 126.9 426.9" className="st144" />
                          <path d="M126.9 428.8 126.9 430.7" className="st144" />
                          <path d="M126.9 432.6 126.9 434.7 126.9 436.2" className="st144" />
                          <path d="M126.9 438.1 126.9 439.5 130.4 439.5" className="st144" />
                          <path d="M126.9 324.8 124.8 324.8" className="st144" />
                          <path d="M124.8 328.4 126.9 328.4" className="st144" />
                          <path d="M188.6 477.4 193 477.4" className="st145" />
                          <path d="M196.5 477.4 349.9 477.4" className="st145" />
                          <path
                            d="M353.4 477.4 359.8 477.4 359.8 473.8 353.4 473.8"
                            className="st145"
                          />
                          <path d="M349.9 473.8 196.5 473.8" className="st145" />
                          <path d="M193 473.8 188.6 473.8 188.6 477.4" className="st145" />
                          <path d="M385.9 477.4 396.1 477.4" className="st145" />
                          <path d="M399.6 477.4 465.2 477.4" className="st145" />
                          <path d="M468.7 477.4 510.4 477.4" className="st145" />
                          <path d="M510.4 473.8 395.7 473.8" className="st145" />
                          <path d="M392.2 473.8 385.9 473.8 385.9 477.4" className="st145" />
                          <path
                            d="M193 425.4 193 441.8 196.5 441.8 196.5 425.4"
                            className="st145"
                          />
                          <path d="M193 469.5 193 473.8" className="st145" />
                          <path d="M196.5 473.8 196.5 469.5 193 469.5" className="st145" />
                          <path d="M193 477.4 193 567.8" className="st145" />
                          <path d="M196.5 567.8 196.5 477.4" className="st145" />
                          <path d="M468.7 567.8 468.7 538.8" className="st145" />
                          <path
                            d="M468.7 535.3 468.7 504.9 465.2 504.9 465.2 506.3"
                            className="st145"
                          />
                          <path d="M465.2 509.9 465.2 567.8" className="st145" />
                          <path d="M468.7 478.8 468.7 477.4" className="st145" />
                          <path d="M465.2 477.4 465.2 478.8 468.7 478.8" className="st145" />
                          <path
                            d="M465.2 506.3 432.6 506.3 432.6 509.9 432.7 509.9"
                            className="st145"
                          />
                          <path d="M436.2 509.9 465.2 509.9" className="st145" />
                          <path
                            d="M432.7 509.9 432.7 511.2 436.2 511.2 436.2 509.9"
                            className="st145"
                          />
                          <path d="M432.7 537.3 432.7 567.8" className="st145" />
                          <path d="M436.2 567.8 436.2 537.3 432.7 537.3" className="st145" />
                          <path d="M396.1 477.4 396.1 535" className="st145" />
                          <path d="M399.6 542.4 399.6 477.4" className="st145" />
                          <path d="M396.1 535 396.1 542.4 399.6 542.4" className="st143" />
                          <path
                            d="M353.4 473.8 353.4 469.4 349.9 469.4 349.9 473.8"
                            className="st145"
                          />
                          <path d="M353.4 443.3 353.4 422" className="st145" />
                          <path d="M349.9 425.4 349.9 443.3 353.4 443.3" className="st145" />
                          <path d="M196.5 425.4 349.9 425.4" className="st145" />
                          <path d="M395.7 473.8 395.7 438.3" className="st145" />
                          <path d="M395.7 434.7 392.2 434.7 392.2 473.8" className="st145" />
                          <path
                            d="M395.7 438.3 400.7 438.3 400.7 434.7 395.7 434.7"
                            className="st145"
                          />
                          <path d="M426.8 438.3 435.3 438.3 435.3 434.7" className="st145" />
                          <path d="M431.7 434.7 426.8 434.7 426.8 438.3" className="st145" />
                          <path d="M435.3 434.7 435.3 358.4" className="st145" />
                          <path d="M431.7 422 431.7 434.7" className="st145" />
                          <path
                            d="M468.7 538.8 493.5 538.8 493.5 535.3 468.7 535.3"
                            className="st145"
                          />
                          <path
                            d="M295.6 567.8 295.6 537.3 292.1 537.3 292.1 567.8"
                            className="st145"
                          />
                          <path d="M295.6 511.2 295.6 506.3 292.1 506.3" className="st145" />
                          <path d="M292.1 509.9 292.1 511.2 295.6 511.2" className="st145" />
                          <path d="M292.1 506.3 259.5 506.3 259.5 509.9" className="st145" />
                          <path d="M263 509.9 292.1 509.9" className="st145" />
                          <path d="M259.5 509.9 259.5 567.8" className="st145" />
                          <path d="M263 567.8 263 509.9" className="st145" />
                          <path
                            d="M230.5 567.8 230.5 535 226.9 535 226.9 567.8"
                            className="st145"
                          />
                          <path d="M349.9 477.4 349.9 538.7" className="st145" />
                          <path d="M353.4 535 353.4 477.4" className="st145" />
                          <path d="M349.9 538.7 353.4 538.7 353.4 535" className="st143" />
                          <path
                            d="M510.4 434.7 474.1 434.7 474.1 438.3 510.4 438.3"
                            className="st145"
                          />
                          <path d="M510.4 434.7 510.4 434.7" className="st143" />
                          <path d="M357.2 567.8 357.2 542.4" className="st145" />
                          <path d="M349.9 538.7 349.8 538.7 349.8 567.8" className="st145" />
                          <path d="M353.4 538.7 349.9 538.7" className="st143" />
                          <path
                            d="M357.2 542.4 361.7 542.4 361.7 535 353.4 535"
                            className="st145"
                          />
                          <path d="M387.8 542.4 392.4 542.4" className="st145" />
                          <path d="M396.1 535 387.8 535 387.8 542.4" className="st145" />
                          <path d="M353.4 535 353.4 538.7" className="st143" />
                          <path d="M396.1 542.4 396.1 535" className="st143" />
                          <path d="M392.4 542.4 392.4 567.8" className="st145" />
                          <path d="M399.8 567.8 399.8 542.4 399.6 542.4" className="st145" />
                          <path d="M399.6 542.4 396.1 542.4" className="st143" />
                          <path
                            d="M187 505.1 183.2 504.6 179.5 503.6 176.1 502.1 172.7 500.2 169.8 497.8 167.2 495 165 491.9 163.2 488.5 161.9 484.9 161.1 481.2 160.8 477.4"
                            className="st143"
                          />
                          <path d="M187 477.4 187 505.1" className="st145" />
                          <path d="M188.6 505.1 187 505.1" className="st145" />
                          <path d="M188.6 477.4 188.6 505.1" className="st145" />
                          <path d="M188.6 477.4 187 477.4" className="st145" />
                          <path
                            d="M224.3 467.9 223.8 464.1 222.8 460.4 221.3 457 219.4 453.6 217 450.7 214.2 448.1 211.1 445.9 207.7 444.1 204.1 442.8 200.3 442 196.5 441.7"
                            className="st143"
                          />
                          <path d="M196.5 467.9 224.3 467.9" className="st145" />
                          <path d="M224.3 469.5 224.3 467.9" className="st145" />
                          <path d="M196.5 469.5 224.3 469.5" className="st145" />
                          <path d="M196.5 469.5 196.5 467.9" className="st145" />
                          <path
                            d="M266 512.8 266.5 516.3 267.4 519.8 268.8 523.1 270.7 526.1 272.9 528.9 275.5 531.4 278.5 533.5 281.6 535.1 285 536.3 288.5 537.1 292.1 537.3"
                            className="st143"
                          />
                          <path d="M292.1 512.8 266 512.8" className="st145" />
                          <path d="M266 511.2 266 512.8" className="st145" />
                          <path d="M292.1 511.2 266 511.2" className="st145" />
                          <path d="M292.1 511.2 292.1 512.8" className="st145" />
                          <path
                            d="M367.8 567.8 370.4 567 373.6 565.7 376.8 563.8 379.5 561.5 382 558.9 384 556 385.7 552.8 386.9 549.4 387.6 546 387.9 542.4"
                            className="st143"
                          />
                          <path d="M363.4 542.4 363.4 567.8" className="st145" />
                          <path d="M361.7 542.4 361.7 567.8" className="st145" />
                          <path d="M361.7 542.4 363.4 542.4" className="st145" />
                          <path
                            d="M462.3 512.8 461.9 516.3 460.9 519.8 459.5 523.1 457.7 526.1 455.4 528.9 452.8 531.4 449.9 533.5 446.7 535.1 443.3 536.3 439.8 537.1 436.2 537.3"
                            className="st143"
                          />
                          <path d="M436.2 512.8 462.3 512.8" className="st145" />
                          <path d="M462.3 511.2 462.3 512.8" className="st145" />
                          <path d="M436.2 511.2 462.3 511.2" className="st145" />
                          <path d="M436.2 511.2 436.2 512.8" className="st145" />
                          <path
                            d="M494.8 503.3 494.4 499.7 493.5 496.3 492 493 490.2 489.9 487.9 487.1 485.3 484.6 482.4 482.6 479.2 481 475.9 479.7 472.3 479 468.7 478.7"
                            className="st143"
                          />
                          <path d="M468.7 503.3 494.8 503.3" className="st145" />
                          <path d="M494.8 504.9 494.8 503.3" className="st145" />
                          <path d="M468.7 504.9 494.8 504.9" className="st145" />
                          <path d="M468.7 504.9 468.7 503.3" className="st145" />
                          <path
                            d="M402.3 464.4 405.8 463.9 409.3 463 412.6 461.5 415.6 459.7 418.4 457.4 420.9 454.9 423 451.9 424.6 448.7 425.8 445.3 426.6 441.8 426.9 438.3"
                            className="st143"
                          />
                          <path d="M402.3 438.3 402.3 464.4" className="st145" />
                          <path d="M400.7 464.4 402.3 464.4" className="st145" />
                          <path d="M400.7 438.3 400.7 464.4" className="st145" />
                          <path d="M400.7 438.3 402.3 438.3" className="st145" />
                          <path
                            d="M384.2 447.7 380.7 448.2 377.2 449.2 373.9 450.6 370.8 452.4 368.1 454.7 365.6 457.2 363.5 460.2 361.9 463.4 360.6 466.8 360 470.2 359.7 473.8"
                            className="st143"
                          />
                          <path d="M384.2 473.8 384.2 447.7" className="st145" />
                          <path d="M385.9 447.7 384.2 447.7" className="st145" />
                          <path d="M385.9 473.8 385.9 447.7" className="st145" />
                          <path d="M385.9 473.8 384.2 473.8" className="st145" />
                          <path
                            d="M323.8 467.8 324.3 464.2 325.2 460.7 326.6 457.4 328.5 454.4 330.7 451.6 333.4 449.2 336.3 447 339.4 445.4 342.8 444.2 346.4 443.4 349.9 443.2"
                            className="st143"
                          />
                          <path d="M349.9 467.8 323.8 467.8" className="st145" />
                          <path d="M323.8 469.4 323.8 467.8" className="st145" />
                          <path d="M349.9 469.4 323.8 469.4" className="st145" />
                          <path d="M349.9 469.4 349.9 467.8" className="st145" />
                          <path
                            d="M133.3 425.4 133.3 439.5 136.8 439.5 136.8 425.4"
                            className="st145"
                          />
                          <path d="M184 425.4 193 425.4" className="st145" />
                          <path d="M184.5 422.1 184.5 422" className="st143" />
                          <path d="M125.2 261.2 125.4 261.3 125.4 261.3" className="st146" />
                          <path
                            d="M128.7 265 128.8 265 129 265 129.5 264.9 129.9 264.8"
                            className="st146"
                          />
                          <path d="M130 264.7 129.9 264.8" className="st146" />
                          <path d="M130 264.7 130.1 264.7 129.7 265.7" className="st146" />
                          <path d="M129.6 266.1 128.6 268.7" className="st146" />
                          <path d="M127 262.3 125.1 261.4" className="st146" />
                          <path d="M127 262.3 128.4 263.1" className="st146" />
                          <path d="M129.9 264.1 129.2 263.6" className="st146" />
                          <path d="M129.9 264.1 130 264.2" className="st146" />
                          <path d="M129.2 263.6 128.4 263.1" className="st146" />
                          <path d="M130 264.2 130.3 264.7" className="st146" />
                          <path d="M130.3 264.7 128.8 268.7" className="st146" />
                          <path d="M125.8 275.9 128.8 268.7" className="st146" />
                          <path d="M125 263.5 125.4 263.6" className="st146" />
                          <path d="M125 263.5 124.7 263.6" className="st146" />
                          <path d="M125.4 263.6 125.8 263.7 127.2 264.3" className="st146" />
                          <path d="M129.2 265.3 129.1 265.1" className="st146" />
                          <path d="M129.2 265.3 129.2 265.4" className="st146" />
                          <path d="M127.2 264.3 128.8 265" className="st146" />
                          <path d="M129.1 265.1 128.8 265" className="st146" />
                          <path d="M128.8 265 128.8 265" className="st146" />
                          <path d="M124.8 277.4 127 272.1" className="st146" />
                          <path d="M127 272.1 129.2 267.1" className="st146" />
                          <path d="M129.2 265.2 129.6 265.4" className="st146" />
                          <path d="M129.2 265.2 128.8 265" className="st146" />
                          <path d="M129.6 265.4 129.7 265.7" className="st146" />
                          <path d="M129.6 265.5 129.8 265.7" className="st146" />
                          <path d="M129.6 265.5 129.7 265.7" className="st146" />
                          <path d="M129.8 265.7 129.2 267.1" className="st146" />
                          <path d="M125.4 261.3 125.4 261.3 125.2 261.2" className="st146" />
                          <path d="M125.4 261.3 125.6 261.5" className="st146" />
                          <path d="M127.3 244.5 127.1 244.5" className="st146" />
                          <path d="M127.3 244.5 127.4 244.4" className="st146" />
                          <path
                            d="M128.1 226.9 128.2 226.9 128.3 226.8 128.8 226.4 129 226"
                            className="st146"
                          />
                          <path d="M129.1 226 129 226" className="st146" />
                          <path d="M129.1 226 129.1 225.9 129.4 226.9" className="st146" />
                          <path d="M129.5 227.3 130.2 230" className="st146" />
                          <path
                            d="M131.4 241.3 131.5 241.3 132 241.5 132.4 241.7 132.5 241.7 132.6 241.7 132.4 240.7"
                            className="st146"
                          />
                          <path d="M132.3 240.3 131.8 237.5 130.2 230" className="st146" />
                          <path d="M125.2 225.7 126.9 225.5" className="st146" />
                          <path d="M128.6 225.5 127.7 225.5" className="st146" />
                          <path d="M128.6 225.5 128.7 225.5" className="st146" />
                          <path d="M127.7 225.5 126.9 225.5" className="st146" />
                          <path d="M128.7 225.5 129.2 225.8" className="st146" />
                          <path d="M129.2 225.8 130.3 229.9" className="st146" />
                          <path d="M127.6 242 126.1 242.5" className="st146" />
                          <path d="M126.1 242.5 127.7 242" className="st146" />
                          <path d="M132 237.6 132.7 241.8" className="st146" />
                          <path d="M132 237.6 130.3 229.9" className="st146" />
                          <path d="M132.7 241.8 132.4 242.3" className="st146" />
                          <path d="M126.3 244.4 127 244.1" className="st146" />
                          <path d="M127 244.1 129.1 243.6 130.7 243" className="st146" />
                          <path d="M131.4 242.7 132.3 242.3" className="st146" />
                          <path d="M131.4 242.7 130.7 243" className="st146" />
                          <path d="M132.3 242.3 132.4 242.3" className="st146" />
                          <path d="M125.3 234.9 126.5 240.5" className="st146" />
                          <path d="M126.5 240.5 127.1 241.9" className="st146" />
                          <path d="M126.8 241.1 127.1 241.9" className="st146" />
                          <path d="M126.8 241.2 127 241.9" className="st146" />
                          <path d="M131.7 241.1 131.7 241.2" className="st146" />
                          <path d="M131.7 241.1 131.7 241" className="st146" />
                          <path d="M131.7 241.2 131.3 241.3 129.6 241.6" className="st146" />
                          <path d="M124.6 227.7 124.9 227.6 126.5 227.3" className="st146" />
                          <path d="M128.7 226.9 128.6 226.8" className="st146" />
                          <path d="M128.7 226.9 128.8 227" className="st146" />
                          <path d="M127.1 241.9 127 241.9" className="st146" />
                          <path d="M127.1 241.9 127.3 242.1 127.7 242" className="st146" />
                          <path d="M129.6 241.6 128.1 241.9" className="st146" />
                          <path d="M126.5 227.3 128.1 226.9" className="st146" />
                          <path d="M127.7 242 128.1 241.9" className="st146" />
                          <path d="M128.6 226.8 128.1 226.9" className="st146" />
                          <path d="M131.7 241 131.7 241" className="st146" />
                          <path d="M128.8 227 128.7 226.9" className="st146" />
                          <path d="M127 241.9 126.8 242 124.8 242.6" className="st146" />
                          <path d="M124.8 242.6 126.8 242" className="st146" />
                          <path d="M127.1 241.9 126.8 242" className="st146" />
                          <path d="M131.3 241.3 131.3 241.3 131.7 241.1" className="st146" />
                          <path d="M128.1 226.9 128.2 226.9" className="st146" />
                          <path d="M132 239.3 130.9 233.7" className="st146" />
                          <path d="M132 239.3 132.4 240.7" className="st146" />
                          <path d="M130.9 233.7 129.7 228.4" className="st146" />
                          <path d="M128.6 226.8 129.1 226.7" className="st146" />
                          <path d="M128.6 226.8 128.2 226.9" className="st146" />
                          <path d="M129.1 226.7 129.3 226.9" className="st146" />
                          <path d="M129.2 226.9 129.4 226.9" className="st146" />
                          <path d="M129.2 226.9 129.3 226.9" className="st146" />
                          <path d="M129.4 226.9 129.7 228.4" className="st146" />
                          <path d="M132.4 240.7 132.2 241 131.7 241.1" className="st146" />
                          <path d="M127.3 244.5 127.4 244.4" className="st146" />
                          <path d="M127.3 244.5 127.1 244.5" className="st146" />
                          <path d="M126.7 244.3 127.2 244.1" className="st146" />
                          <path
                            d="M126.9 244.6 127.5 244.3 128.1 244.1 128.7 243.9 131.8 242.6 132.1 242.4 132.2 242.4"
                            className="st146"
                          />
                          <path d="M127.6 244.3 127.3 244.5" className="st146" />
                          <path d="M127.2 244.1 127.1 244.1" className="st146" />
                          <path d="M189.3 139 186 142.2" className="st147" />
                          <path d="M189.3 134.9 182.1 142.1" className="st147" />
                          <path d="M185.3 134.8 182.1 138.1" className="st147" />
                          <path d="M140.2 139.5 137.6 142.2" className="st147" />
                          <path d="M140.2 135.5 133.5 142.2" className="st147" />
                          <path d="M136.8 134.8 129.5 142.2" className="st147" />
                          <path d="M132.8 134.8 125.4 142.2" className="st147" />
                          <path d="M189.3 142.1 189.1 142.2" className="st147" />
                          <path d="M189.3 138 185 142.2" className="st147" />
                          <path d="M188.4 134.8 182.1 141.2" className="st147" />
                          <path d="M184.4 134.8 182.1 137.2" className="st147" />
                          <path d="M140.2 138.5 136.6 142.2" className="st147" />
                          <path d="M139.9 134.8 132.6 142.2" className="st147" />
                          <path d="M135.9 134.8 128.5 142.2" className="st147" />
                          <path d="M134.7 195.1 134.5 195.1" className="st146" />
                          <path d="M134.7 195.1 134.8 195" className="st146" />
                          <path d="M133.4 176 133.6 176 133.7 176.1" className="st146" />
                          <path
                            d="M138.3 177.8 138.4 177.8 138.5 177.8 139 177.4 139.3 177.2"
                            className="st146"
                          />
                          <path d="M139.4 177.1 139.3 177.2" className="st146" />
                          <path d="M139.4 177.1 139.4 177.1 139.5 178.1" className="st146" />
                          <path d="M139.6 178.5 139.8 181.2" className="st146" />
                          <path
                            d="M139.3 192.5 139.4 192.6 139.8 192.9 140.2 193.1 140.3 193.2 140.3 192.2"
                            className="st146"
                          />
                          <path d="M140.3 191.8 140.2 189 139.8 181.2" className="st146" />
                          <path d="M133 178 134.7 178" className="st146" />
                          <path d="M133 178 134.8 178" className="st146" />
                          <path d="M134.7 178 134.8 178" className="st146" />
                          <path d="M132.7 176.2 132.4 176.2" className="st146" />
                          <path d="M132.7 176.2 129.7 176" className="st146" />
                          <path d="M135.6 176.2 133.4 176.2" className="st146" />
                          <path d="M135.6 176.2 137.2 176.3" className="st146" />
                          <path d="M133.4 176.2 132.4 176.2" className="st146" />
                          <path d="M139 176.5 138.1 176.4" className="st146" />
                          <path d="M139 176.5 139.1 176.6" className="st146" />
                          <path d="M138.1 176.4 137.2 176.3" className="st146" />
                          <path d="M139.1 176.6 139.5 177" className="st146" />
                          <path d="M139.5 177 140 181.2" className="st146" />
                          <path d="M135.4 192.7 133.9 192.9" className="st146" />
                          <path d="M133.9 192.9 135.5 192.7" className="st146" />
                          <path d="M140.4 189 140.4 193.3" className="st146" />
                          <path d="M140.4 189 140 181.2" className="st146" />
                          <path d="M140.4 193.3 140 193.7" className="st146" />
                          <path d="M133.7 194.8 134.5 194.7" className="st146" />
                          <path d="M133.7 194.8 130.9 195.4" className="st146" />
                          <path d="M134.5 194.7 136.6 194.5 138.2 194.2" className="st146" />
                          <path d="M139.1 194 140 193.7" className="st146" />
                          <path d="M139.1 194 138.2 194.2" className="st146" />
                          <path d="M140 193.7 140 193.7" className="st146" />
                          <path d="M134.3 185.4 134.6 191" className="st146" />
                          <path d="M134.3 185.4 134 179.9" className="st146" />
                          <path d="M134.6 191 134.9 192.5" className="st146" />
                          <path d="M134.7 191.7 134.9 192.5" className="st146" />
                          <path d="M134.7 191.8 134.8 192.5" className="st146" />
                          <path d="M139.6 192.4 139.6 192.5" className="st146" />
                          <path d="M139.6 192.4 139.7 192.3" className="st146" />
                          <path d="M139.6 192.5 139.2 192.5 137.5 192.7" className="st146" />
                          <path d="M134.3 178.2 134.7 178" className="st146" />
                          <path d="M134.3 178.2 134.1 178.4" className="st146" />
                          <path d="M134.7 178 135.1 178 136.6 178" className="st146" />
                          <path d="M138.8 178 138.7 177.8" className="st146" />
                          <path d="M138.8 178 138.9 178" className="st146" />
                          <path d="M134 179.9 134 178.5 134.1 178.4" className="st146" />
                          <path d="M134.9 192.5 134.8 192.5" className="st146" />
                          <path d="M134.9 192.5 135.1 192.7 135.6 192.7" className="st146" />
                          <path d="M137.5 192.7 135.9 192.7" className="st146" />
                          <path d="M136.6 178 138.3 177.8" className="st146" />
                          <path d="M135.6 192.7 135.9 192.7" className="st146" />
                          <path d="M138.7 177.8 138.3 177.8" className="st146" />
                          <path d="M139.7 192.3 139.6 192.4" className="st146" />
                          <path d="M138.9 178 138.8 178" className="st146" />
                          <path d="M134.8 192.5 134.6 192.6 132.6 192.9" className="st146" />
                          <path d="M134.1 178.4 133.8 178.4" className="st146" />
                          <path d="M124.9 177.8 131.7 178.2 133.8 178.4" className="st146" />
                          <path d="M132.6 192.9 125.8 194.1" className="st146" />
                          <path d="M132.6 192.9 134.6 192.6" className="st146" />
                          <path d="M124.9 177.8 131.7 178.2" className="st146" />
                          <path d="M131.7 178.2 133.8 178.4" className="st146" />
                          <path d="M134.1 178.4 133.8 178.4" className="st146" />
                          <path d="M134.9 192.5 134.6 192.6" className="st146" />
                          <path d="M139.2 192.5 139.2 192.5 139.6 192.5" className="st146" />
                          <path d="M138.3 177.8 138.4 177.8" className="st146" />
                          <path d="M140.2 190.7 139.9 185" className="st146" />
                          <path d="M140.2 190.7 140.3 192.2" className="st146" />
                          <path d="M139.9 185 139.6 179.6" className="st146" />
                          <path d="M138.8 177.8 139.2 177.8" className="st146" />
                          <path d="M138.8 177.8 138.4 177.8" className="st146" />
                          <path d="M139.2 177.8 139.4 178" className="st146" />
                          <path d="M139.4 178 139.6 178.1" className="st146" />
                          <path d="M139.4 178 139.4 178" className="st146" />
                          <path d="M139.6 178.1 139.6 179.6" className="st146" />
                          <path d="M140.3 192.2 140 192.5 139.6 192.5" className="st146" />
                          <path d="M133.7 176.1 133.6 176 133.4 176" className="st146" />
                          <path d="M134.7 195.1 134.8 195" className="st146" />
                          <path d="M134.7 195.1 134.5 195.1" className="st146" />
                          <path d="M125.2 196.8 125.4 196.8" className="st146" />
                          <path d="M125 197.1 125.3 197.2" className="st146" />
                          <path d="M125.4 196.8 125.7 196.7" className="st146" />
                          <path d="M125.3 197.2 125.7 197.1" className="st146" />
                          <path d="M125.6 196.8 125.7 196.7" className="st146" />
                          <path d="M125.6 196.8 126 196.7" className="st146" />
                          <path d="M125.7 197.1 125.7 197.1 126.1 197.1" className="st146" />
                          <path d="M126 196.7 134.2 194.8" className="st146" />
                          <path d="M126.1 197.1 134.3 195.2" className="st146" />
                          <path d="M134.2 194.8 134.7 194.7" className="st146" />
                          <path
                            d="M134.3 195.2 134.9 195 135.6 194.9 136.2 194.8 139.4 194 139.8 193.8 139.8 193.8"
                            className="st146"
                          />
                          <path d="M133.6 176 134 176.1" className="st146" />
                          <path d="M135.1 195 134.7 195.1" className="st146" />
                          <path d="M134.7 194.7 134.6 194.8" className="st146" />
                          <path d="M128 160.1 127.9 160.2" className="st146" />
                          <path d="M128 160.1 128.1 160" className="st146" />
                          <path
                            d="M130.3 155.3 130.4 155.3 130.9 155.3 131.3 155.3 131.5 155.3 131.5 155.3 130.9 154.5"
                            className="st146"
                          />
                          <path d="M127.3 157.7 126.1 158.8" className="st146" />
                          <path d="M126.1 158.8 127.3 157.6" className="st146" />
                          <path d="M129.2 151.8 131.7 155.3" className="st146" />
                          <path d="M131.7 155.3 131.5 155.9" className="st146" />
                          <path d="M127.1 160.4 127.6 159.9" className="st146" />
                          <path d="M127.1 160.4 125 162.5" className="st146" />
                          <path d="M127.6 159.9 129.2 158.5 130.4 157.3" className="st146" />
                          <path d="M131 156.7 131.5 155.9" className="st146" />
                          <path d="M131 156.7 130.4 157.3" className="st146" />
                          <path d="M131.5 155.9 131.5 155.9" className="st146" />
                          <path d="M125.6 156.8 126.7 157.9" className="st146" />
                          <path d="M126.1 157.2 126.7 157.9" className="st146" />
                          <path d="M126.1 157.3 126.6 157.9" className="st146" />
                          <path d="M130.5 155.1 130.5 155.2" className="st146" />
                          <path d="M130.5 155.1 130.5 154.9" className="st146" />
                          <path d="M130.5 155.2 130.2 155.5 128.9 156.5" className="st146" />
                          <path d="M126.7 157.9 126.6 157.9" className="st146" />
                          <path d="M126.7 157.9 127 157.9 127.3 157.6" className="st146" />
                          <path d="M128.9 156.5 127.6 157.4" className="st146" />
                          <path d="M127.3 157.6 127.6 157.4" className="st146" />
                          <path d="M130.5 154.9 130.5 155" className="st146" />
                          <path d="M126.6 157.9 126.5 158.1 125 159.5" className="st146" />
                          <path d="M125 159.5 126.5 158.1" className="st146" />
                          <path d="M126.6 157.9 126.5 158.1" className="st146" />
                          <path d="M130.2 155.5 130.3 155.4 130.6 155.1" className="st146" />
                          <path d="M130 153.3 126.5 148.9" className="st146" />
                          <path d="M130 153.3 130.9 154.5" className="st146" />
                          <path d="M130.9 154.5 130.9 154.8 130.6 155.1" className="st146" />
                          <path d="M128 160.1 128.1 160" className="st146" />
                          <path d="M128 160.1 127.9 160.2" className="st146" />
                          <path d="M127.4 160.1 127.7 159.8" className="st146" />
                          <path
                            d="M127.7 160.4 128.1 159.9 128.6 159.3 129 158.9 131.3 156.4 131.5 156.2 131.5 156.1"
                            className="st146"
                          />
                          <path d="M128.2 159.8 128 160.1" className="st146" />
                          <path d="M127.7 159.8 127.7 159.8" className="st146" />
                          <path d="M134.9 292.7 131.3 296.3" className="st147" />
                          <path d="M130.9 292.7 127.3 296.3" className="st147" />
                          <path d="M136.8 293.8 134.4 296.3" className="st147" />
                          <path d="M133.9 292.7 130.4 296.3" className="st147" />
                          <path d="M129.8 292.7 126.3 296.3" className="st147" />
                          <path d="M133.7 425.4 133.3 424.9" className="st147" />
                          <path d="M136.8 424.4 133.3 420.9" className="st147" />
                          <path d="M136.8 420.3 133.3 416.8" className="st147" />
                          <path d="M136.8 416.3 133.3 412.8" className="st147" />
                          <path d="M136.8 412.2 133.3 408.7" className="st147" />
                          <path d="M136.8 408.2 133.3 404.7" className="st147" />
                          <path d="M136.8 404.2 133.3 400.7" className="st147" />
                          <path d="M136.8 400.1 133.3 396.6" className="st147" />
                          <path d="M136.8 396.1 133.3 392.6" className="st147" />
                          <path d="M136.8 392.1 133.3 388.5" className="st147" />
                          <path d="M136.8 388 133.3 384.5" className="st147" />
                          <path d="M136.8 384 133.3 380.5" className="st147" />
                          <path d="M136.8 380 133.3 376.4" className="st147" />
                          <path d="M136.8 375.9 133.3 372.4" className="st147" />
                          <path d="M136.8 371.9 133.3 368.3" className="st147" />
                          <path d="M136.8 367.8 133.3 364.3" className="st147" />
                          <path d="M136.8 363.8 133.3 360.3" className="st147" />
                          <path d="M136.8 359.8 133.3 356.2" className="st147" />
                          <path d="M136.8 355.7 133.3 352.2" className="st147" />
                          <path d="M136.8 351.7 133.3 348.1" className="st147" />
                          <path d="M136.8 347.7 133.3 344.1" className="st147" />
                          <path d="M136.8 343.6 133.3 340.1" className="st147" />
                          <path d="M136.8 339.6 133.3 336" className="st147" />
                          <path d="M136.8 335.6 133.3 332" className="st147" />
                          <path d="M136.8 331.5 133.3 327.9" className="st147" />
                          <path d="M136.8 327.5 133.3 323.9" className="st147" />
                          <path d="M136.8 323.5 133.3 319.9" className="st147" />
                          <path d="M136.8 319.4 133.3 315.8" className="st147" />
                          <path d="M136.8 315.4 133.3 311.8" className="st147" />
                          <path d="M136.8 311.3 133.3 307.8" className="st147" />
                          <path d="M136.8 307.3 133.3 303.7" className="st147" />
                          <path d="M136.8 303.3 133.3 299.7" className="st147" />
                          <path d="M136.8 299.2 133.9 296.3" className="st147" />
                          <path d="M134.7 425.4 133.3 423.9" className="st147" />
                          <path d="M136.8 423.4 133.3 419.9" className="st147" />
                          <path d="M136.8 419.4 133.3 415.8" className="st147" />
                          <path d="M136.8 415.3 133.3 411.8" className="st147" />
                          <path d="M136.8 411.3 133.3 407.8" className="st147" />
                          <path d="M136.8 407.3 133.3 403.7" className="st147" />
                          <path d="M136.8 403.2 133.3 399.7" className="st147" />
                          <path d="M136.8 399.2 133.3 395.7" className="st147" />
                          <path d="M136.8 395.1 133.3 391.6" className="st147" />
                          <path d="M136.8 391.1 133.3 387.6" className="st147" />
                          <path d="M136.8 387.1 133.3 383.6" className="st147" />
                          <path d="M136.8 383 133.3 379.5" className="st147" />
                          <path d="M136.8 379 133.3 375.5" className="st147" />
                          <path d="M136.8 374.9 133.3 371.4" className="st147" />
                          <path d="M136.8 370.9 133.3 367.4" className="st147" />
                          <path d="M136.8 366.9 133.3 363.4" className="st147" />
                          <path d="M136.8 362.8 133.3 359.3" className="st147" />
                          <path d="M136.8 358.8 133.3 355.3" className="st147" />
                          <path d="M136.8 354.7 133.3 351.2" className="st147" />
                          <path d="M136.8 350.7 133.3 347.2" className="st147" />
                          <path d="M136.8 346.7 133.3 343.2" className="st147" />
                          <path d="M136.8 342.6 133.3 339.1" className="st147" />
                          <path d="M136.8 338.6 133.3 335.1" className="st147" />
                          <path d="M136.8 334.5 133.3 331" className="st147" />
                          <path d="M136.8 330.5 133.3 327" className="st147" />
                          <path d="M136.8 326.5 133.3 323" className="st147" />
                          <path d="M136.8 322.4 133.3 318.9" className="st147" />
                          <path d="M136.8 318.4 133.3 314.9" className="st147" />
                          <path d="M136.8 314.3 133.3 310.8" className="st147" />
                          <path d="M136.8 310.3 133.3 306.8" className="st147" />
                          <path d="M136.8 306.3 133.3 302.8" className="st147" />
                          <path d="M136.8 302.2 133.3 298.7" className="st147" />
                          <path d="M136.8 298.2 134.8 296.3" className="st147" />
                          <path d="M183.4 422.1 183.7 421.8" className="st147" />
                          <path d="M187.6 422 187.7 421.8" className="st147" />
                          <path d="M191.6 422 191.7 421.8" className="st147" />
                          <path d="M183.4 423.1 184 422.5" className="st147" />
                          <path d="M184.5 422 184.6 421.8" className="st147" />
                          <path d="M188.5 422 188.6 421.8" className="st147" />
                          <path d="M192.5 422 192.7 421.8" className="st147" />
                          <path d="M184.7 341.7 185.8 341.7" className="st148" />
                          <path d="M183.4 345.6 184.5 345.6" className="st148" />
                          <path d="M183.4 349.4 184.5 349.4" className="st148" />
                          <path d="M183.4 353.2 184.5 353.2" className="st148" />
                          <path d="M183.4 357.1 184.5 357.1" className="st148" />
                          <path d="M183.4 361 184.5 361" className="st148" />
                          <path d="M183.4 364.8 184.5 364.8" className="st148" />
                          <path d="M183.4 368.7 184.5 368.7" className="st148" />
                          <path d="M183.4 372.5 184.5 372.5" className="st148" />
                          <path d="M183.4 411.1 311.4 411.1" className="st148" />
                          <path d="M183.4 414.9 311.4 414.9" className="st148" />
                          <path d="M183.4 418.8 311.4 418.8" className="st148" />
                          <path d="M186.4 340.9 186.4 340" className="st148" />
                          <path d="M190.2 338.8 190.2 338.6" className="st148" />
                          <path d="M126.8 244.2 126.9 244.2" className="st149" />
                          <path d="M353.4 379.1 431.7 379.1" className="st149" />
                          <path d="M311.4 417.6 431.7 417.6" className="st149" />
                          <path d="M374.4 371.9 374.4 371.5" className="st149" />
                          <path d="M374.4 364.2 374.4 363.9" className="st149" />
                          <path d="M412.9 371.4 412.9 371" className="st149" />
                          <path d="M412.9 364.7 412.9 364.3" className="st149" />
                          <path d="M412.9 267.5 412.9 267.2" className="st149" />
                          <path d="M432.2 267.5 432.2 267.2" className="st149" />
                          <path d="M451.5 267.5 451.5 267.2" className="st149" />
                          <path d="M470.8 267.5 470.8 267.2" className="st149" />
                          <path d="M490 267.5 490 267.2" className="st149" />
                          <path d="M509.3 267.5 509.3 142.8" className="st149" />
                          <path
                            fill="none"
                            stroke="#2c4c9c"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit={10}
                            strokeWidth={0.24}
                            d="M510.4 138.4 511 137.8"
                          />
                          <path d="M205.6 50.4 206 50" className="st148" />
                          <path d="M209.6 46.5 210.1 46" className="st148" />
                          <path d="M219.2 50.4 219.6 50" className="st148" />
                          <path d="M223.2 46.5 223.7 46" className="st148" />
                          <path d="M232.8 50.4 233.3 50" className="st148" />
                          <path d="M236.8 46.5 238.1 45.2" className="st148" />
                          <path d="M246.5 50.4 246.9 50" className="st148" />
                          <path d="M250.4 46.5 251.7 45.2" className="st148" />
                          <path d="M260.1 50.4 260.6 50" className="st148" />
                          <path d="M264.1 46.5 264.6 46" className="st148" />
                          <path d="M273.8 50.4 274.2 50" className="st148" />
                          <path d="M277.7 46.5 278.2 46" className="st148" />
                          <path d="M287.4 50.4 287.8 50" className="st148" />
                          <path d="M291.3 46.5 291.8 46" className="st148" />
                          <path d="M301 50.4 301.4 50" className="st148" />
                          <path d="M305 46.5 306.2 45.2" className="st148" />
                          <path d="M314.6 50.4 315 50" className="st148" />
                          <path d="M318.6 46.5 319 46" className="st148" />
                          <path d="M328.2 50.4 328.7 50" className="st148" />
                          <path d="M332.2 46.5 332.7 46" className="st148" />
                          <path d="M341.9 50.4 342.3 50" className="st148" />
                          <path d="M345.8 46.5 346.3 46" className="st148" />
                          <path d="M346.7 45.6 347.1 45.2" className="st148" />
                          <path d="M359.5 46.5 360 46" className="st148" />
                          <path d="M373.1 46.5 373.6 46" className="st148" />
                          <path d="M383.1 50.2 383.2 50" className="st148" />
                          <path d="M386.7 46.5 387.2 46" className="st148" />
                          <path d="M396.7 50.2 396.8 50" className="st148" />
                          <path d="M427.6 46.5 428.1 46" className="st148" />
                          <path d="M441.2 46.5 441.7 46" className="st148" />
                          <path d="M464.8 50.2 464.9 50" className="st148" />
                          <path d="M468.5 46.5 468.9 46" className="st148" />
                          <path d="M478.5 50.2 478.6 50" className="st148" />
                          <path d="M482.1 46.5 482.6 46" className="st148" />
                          <path d="M495.7 46.5 496.2 46" className="st148" />
                          <path d="M523 46.5 523.5 46" className="st148" />
                          <path d="M532.6 50.4 533 50" className="st148" />
                          <path d="M536.6 46.5 537.1 46" className="st148" />
                          <path d="M546.2 50.4 546.7 50" className="st148" />
                          <path d="M550.2 46.5 550.7 46" className="st148" />
                          <path d="M559.9 50.4 560.3 50" className="st148" />
                          <path d="M563.8 46.5 565.1 45.2" className="st148" />
                          <path d="M573.5 50.4 574 50" className="st148" />
                          <path d="M577.5 46.5 578.7 45.2" className="st148" />
                          <path d="M587.2 50.4 587.6 50" className="st148" />
                          <path d="M591.1 46.5 591.6 46" className="st148" />
                          <path d="M600.8 50.4 601.2 50" className="st148" />
                          <path d="M604.8 46.5 605.2 46" className="st148" />
                          <path d="M614.4 50.4 614.8 50" className="st148" />
                          <path d="M618.4 46.5 618.8 46" className="st148" />
                          <path d="M619.2 45.6 619.7 45.2" className="st148" />
                          <path d="M628 50.4 628.5 50" className="st148" />
                          <path d="M632 46.5 632.5 46" className="st148" />
                          <path d="M641.7 50.4 642.1 50" className="st148" />
                          <path d="M645.6 46.5 646.1 46" className="st148" />
                          <path d="M655.3 50.4 655.7 50" className="st148" />
                          <path d="M659.2 46.5 659.8 46" className="st148" />
                          <path d="M666.5 52.9 669.1 50.2" className="st148" />
                          <path d="M666.7 352.4 667.2 351.9" className="st148" />
                          <path d="M668.1 351 669.1 350" className="st148" />
                          <path d="M668.5 527.7 669.1 527.1" className="st148" />
                          <path d="M669.1 567.2 668.9 566.9" className="st148" />
                          <path d="M206.9 50.4 206.5 50" className="st148" />
                          <path d="M202.9 46.5 202.4 46" className="st148" />
                          <path d="M220.5 50.4 220.1 50" className="st148" />
                          <path d="M216.6 46.5 216 46" className="st148" />
                          <path d="M234.1 50.4 233.7 50" className="st148" />
                          <path d="M230.2 46.5 229.7 46" className="st148" />
                          <path d="M247.8 50.4 247.3 50" className="st148" />
                          <path d="M243.8 46.5 242.6 45.2" className="st148" />
                          <path d="M261.4 50.4 261 50" className="st148" />
                          <path d="M257.4 46.5 257 46" className="st148" />
                          <path d="M256.5 45.5 256.2 45.2" className="st148" />
                          <path d="M275.1 50.4 274.6 50" className="st148" />
                          <path d="M271 46.5 270.6 46" className="st148" />
                          <path d="M288.6 50.4 288.2 50" className="st148" />
                          <path d="M284.7 46.5 284.2 46" className="st148" />
                          <path d="M302.3 50.4 301.8 50" className="st148" />
                          <path d="M298.3 46.5 297.1 45.2" className="st148" />
                          <path d="M315.9 50.4 315.5 50" className="st148" />
                          <path d="M312 46.5 311.5 46" className="st148" />
                          <path d="M329.6 50.4 329.1 50" className="st148" />
                          <path d="M325.6 46.5 325.1 46" className="st148" />
                          <path d="M343.2 50.4 342.7 50" className="st148" />
                          <path d="M339.2 46.5 338.7 46" className="st148" />
                          <path d="M366.4 46.5 365.9 46" className="st148" />
                          <path d="M383.8 50.2 383.6 50" className="st148" />
                          <path d="M380.1 46.5 379.6 46" className="st148" />
                          <path d="M397.4 50.2 397.2 50" className="st148" />
                          <path d="M393.7 46.5 393.2 46" className="st148" />
                          <path d="M434.6 46.5 434.1 46" className="st148" />
                          <path d="M448.2 46.5 447.7 46" className="st148" />
                          <path d="M465.5 50.2 465.3 50" className="st148" />
                          <path d="M479.1 50.2 479 50" className="st148" />
                          <path d="M475.5 46.5 475 46" className="st148" />
                          <path d="M489.1 46.5 488.6 46" className="st148" />
                          <path d="M502.7 46.5 502.2 46" className="st148" />
                          <path d="M533.9 50.4 533.5 50" className="st148" />
                          <path d="M530 46.5 529.5 46" className="st148" />
                          <path d="M547.6 50.4 547.1 50" className="st148" />
                          <path d="M543.6 46.5 543.1 46" className="st148" />
                          <path d="M561.2 50.4 560.8 50" className="st148" />
                          <path d="M557.2 46.5 556.8 46" className="st148" />
                          <path d="M574.9 50.4 574.4 50" className="st148" />
                          <path d="M570.8 46.5 569.6 45.2" className="st148" />
                          <path d="M588.4 50.4 588 50" className="st148" />
                          <path d="M584.5 46.5 584 46" className="st148" />
                          <path d="M602 50.4 601.6 50" className="st148" />
                          <path d="M598.1 46.5 597.6 46" className="st148" />
                          <path d="M615.7 50.4 615.2 50" className="st148" />
                          <path d="M611.7 46.5 611.2 46" className="st148" />
                          <path d="M629.3 50.4 628.9 50" className="st148" />
                          <path d="M625.4 46.5 624.1 45.2" className="st148" />
                          <path d="M643 50.4 642.5 50" className="st148" />
                          <path d="M639 46.5 638.5 46" className="st148" />
                          <path d="M656.6 50.4 656.2 50" className="st148" />
                          <path d="M652.6 46.5 652.1 46" className="st148" />
                          <path d="M666.2 46.5 665.7 46" className="st148" />
                          <path d="M681.6 576.7 681.6 34.3" className="st151" />
                          <path d="M398 267.5 510.4 267.5 510.4 351 420.2 351" className="st151" />
                          <path d="M398 351 398 267.5" className="st151" />
                          <path d="M399.3 309 399.3 310.7" className="st151" />
                          <path d="M471.5 310.7 471.5 309" className="st151" />
                          <path d="M470 309 399.3 309" className="st151" />
                          <path d="M407.3 310.7 399.3 310.7" className="st151" />
                          <path d="M415.4 310.7 407.3 310.7" className="st151" />
                          <path d="M423.4 310.7 415.4 310.7" className="st151" />
                          <path d="M431.4 310.7 423.4 310.7" className="st151" />
                          <path d="M439.4 310.7 431.4 310.7" className="st151" />
                          <path d="M447.5 310.7 439.4 310.7" className="st151" />
                          <path d="M455.5 310.7 447.5 310.7" className="st151" />
                          <path d="M463.5 310.7 455.5 310.7" className="st151" />
                          <path d="M471.5 310.7 463.5 310.7" className="st151" />
                          <path d="M399.3 349.2 399.3 350.9" className="st151" />
                          <path d="M407.3 349.2 399.3 349.2" className="st151" />
                          <path d="M415.4 349.2 407.3 349.2" className="st151" />
                          <path d="M423.4 349.2 415.4 349.2" className="st151" />
                          <path d="M431.4 349.2 423.4 349.2" className="st151" />
                          <path d="M439.4 349.2 431.4 349.2" className="st151" />
                          <path d="M447.5 349.2 439.4 349.2" className="st151" />
                          <path d="M455.5 349.2 447.5 349.2" className="st151" />
                          <path d="M463.5 349.2 455.5 349.2" className="st151" />
                          <path d="M471.5 349.2 463.5 349.2" className="st151" />
                          <path d="M480.6 349.2 471.5 349.2" className="st151" />
                          <path d="M480.6 350.9 399.3 350.9" className="st151" />
                          <path d="M471.5 307.7 470 307.7" className="st151" />
                          <path d="M471.5 307.7 471.5 309" className="st151" />
                          <path d="M510.4 267.5 470.6 267.5" className="st151" />
                          <path d="M510.1 269.1 470.6 269.1" className="st151" />
                          <path d="M510.1 349.2 510.1 269.1" className="st151" />
                          <path d="M480.6 350.9 510.4 350.9" className="st151" />
                          <path d="M480.6 349.2 510.1 349.2" className="st151" />
                          <path d="M398 309.2 399.3 309.2" className="st151" />
                          <path d="M463.5 307.7 470 307.7" className="st151" />
                          <path d="M455.5 307.7 463.5 307.7" className="st151" />
                          <path d="M447.5 307.7 455.5 307.7" className="st151" />
                          <path d="M439.4 307.7 447.5 307.7" className="st151" />
                          <path d="M431.4 307.7 439.4 307.7" className="st151" />
                          <path d="M423.4 307.7 431.4 307.7" className="st151" />
                          <path d="M415.4 307.7 423.4 307.7" className="st151" />
                          <path d="M407.3 307.7 415.4 307.7" className="st151" />
                          <path d="M399.3 307.7 407.3 307.7" className="st151" />
                          <path d="M398 307.7 399.3 307.7" className="st151" />
                          <path d="M463.5 269.1 470.6 269.1" className="st151" />
                          <path d="M455.5 269.1 463.5 269.1" className="st151" />
                          <path d="M447.5 269.1 455.5 269.1" className="st151" />
                          <path d="M439.4 269.1 447.5 269.1" className="st151" />
                          <path d="M431.4 269.1 439.4 269.1" className="st151" />
                          <path d="M423.4 269.1 431.4 269.1" className="st151" />
                          <path d="M415.4 269.1 423.4 269.1" className="st151" />
                          <path d="M407.3 269.1 415.4 269.1" className="st151" />
                          <path d="M399.3 269.1 407.3 269.1" className="st151" />
                          <path d="M398 269.1 399.3 269.1" className="st151" />
                          <path d="M398 267.5 470.6 267.5" className="st151" />
                          <path d="M399.3 349.2 399.3 310.7" className="st151" />
                          <path d="M471.5 349.2 471.5 349" className="st151" />
                          <path d="M471.5 347.8 471.5 312.1" className="st151" />
                          <path d="M471.5 310.9 471.5 310.7" className="st151" />
                          <path d="M471.5 269.1 471.5 269.3" className="st151" />
                          <path d="M471.5 270.6 471.5 306.2" className="st151" />
                          <path d="M471.5 307.4 471.5 307.7" className="st151" />
                          <path d="M470 307.7 471.5 307.7" className="st151" />
                          <path d="M406.5 349.2 406.5 349" className="st151" />
                          <path d="M406.5 347.8 406.5 338.9" className="st151" />
                          <path d="M406.5 333.8 406.5 326.1" className="st151" />
                          <path d="M406.5 321 406.5 312.1" className="st151" />
                          <path d="M406.5 310.9 406.5 310.7" className="st151" />
                          <path d="M414.6 349.2 414.6 349" className="st151" />
                          <path d="M414.6 347.8 414.6 338.9" className="st151" />
                          <path d="M414.6 333.8 414.6 326.1" className="st151" />
                          <path d="M414.6 321 414.6 312.1" className="st151" />
                          <path d="M414.6 310.9 414.6 310.7" className="st151" />
                          <path d="M422.6 349.2 422.6 349" className="st151" />
                          <path d="M422.6 347.8 422.6 338.9" className="st151" />
                          <path d="M422.6 333.8 422.6 326.1" className="st151" />
                          <path d="M422.6 321 422.6 312.1" className="st151" />
                          <path d="M422.6 310.9 422.6 310.7" className="st151" />
                          <path d="M430.6 349.2 430.6 349" className="st151" />
                          <path d="M430.6 347.8 430.6 338.9" className="st151" />
                          <path d="M430.6 333.8 430.6 326.1" className="st151" />
                          <path d="M430.6 321 430.6 312.1" className="st151" />
                          <path d="M430.6 310.9 430.6 310.7" className="st151" />
                          <path d="M438.6 349.2 438.6 349" className="st151" />
                          <path d="M438.6 347.8 438.6 338.9" className="st151" />
                          <path d="M438.6 333.8 438.6 326.1" className="st151" />
                          <path d="M438.6 321 438.6 312.1" className="st151" />
                          <path d="M438.6 310.9 438.6 310.7" className="st151" />
                          <path d="M446.6 349.2 446.6 349" className="st151" />
                          <path d="M446.6 347.8 446.6 338.9" className="st151" />
                          <path d="M446.6 333.8 446.6 326.1" className="st151" />
                          <path d="M446.6 321 446.6 312.1" className="st151" />
                          <path d="M446.6 310.9 446.6 310.7" className="st151" />
                          <path d="M454.7 349.2 454.7 349" className="st151" />
                          <path d="M454.7 347.8 454.7 338.9" className="st151" />
                          <path d="M454.7 333.8 454.7 326.1" className="st151" />
                          <path d="M454.7 321 454.7 312.1" className="st151" />
                          <path d="M454.7 310.9 454.7 310.7" className="st151" />
                          <path d="M462.7 349.2 462.7 349" className="st151" />
                          <path d="M462.7 347.8 462.7 338.9" className="st151" />
                          <path d="M462.7 333.8 462.7 326.1" className="st151" />
                          <path d="M462.7 321 462.7 312.1" className="st151" />
                          <path d="M462.7 310.9 462.7 310.7" className="st151" />
                          <path d="M470.8 349.2 470.8 349" className="st151" />
                          <path d="M470.8 347.8 470.8 338.9" className="st151" />
                          <path d="M470.8 333.8 470.8 326.1" className="st151" />
                          <path d="M470.8 321 470.8 312.1" className="st151" />
                          <path d="M470.8 310.9 470.8 310.7" className="st151" />
                          <path d="M472.3 269.1 472.3 269.3" className="st151" />
                          <path d="M472.3 270.6 472.3 279.5" className="st151" />
                          <path d="M472.3 284.6 472.3 292.3" className="st151" />
                          <path d="M472.3 297.4 472.3 306.2" className="st151" />
                          <path d="M472.3 306.7 472.3 306.9" className="st151" />
                          <path d="M464.3 269.1 464.3 269.3" className="st151" />
                          <path d="M464.3 270.6 464.3 279.5" className="st151" />
                          <path d="M464.3 284.6 464.3 292.3" className="st151" />
                          <path d="M464.3 297.4 464.3 306.2" className="st151" />
                          <path d="M464.3 307.5 464.3 307.7" className="st151" />
                          <path d="M456.3 269.1 456.3 269.3" className="st151" />
                          <path d="M456.3 270.6 456.3 279.5" className="st151" />
                          <path d="M456.3 284.6 456.3 292.3" className="st151" />
                          <path d="M456.3 297.4 456.3 306.2" className="st151" />
                          <path d="M456.3 307.5 456.3 307.7" className="st151" />
                          <path d="M448.3 269.1 448.3 269.3" className="st151" />
                          <path d="M448.3 270.6 448.3 279.5" className="st151" />
                          <path d="M448.3 284.6 448.3 292.3" className="st151" />
                          <path d="M448.3 297.4 448.3 306.2" className="st151" />
                          <path d="M448.3 307.5 448.3 307.7" className="st151" />
                          <path d="M440.2 269.1 440.2 269.3" className="st151" />
                          <path d="M440.2 270.6 440.2 279.5" className="st151" />
                          <path d="M440.2 284.6 440.2 292.3" className="st151" />
                          <path d="M440.2 297.4 440.2 306.2" className="st151" />
                          <path d="M440.2 307.5 440.2 307.7" className="st151" />
                          <path d="M432.2 269.1 432.2 269.3" className="st151" />
                          <path d="M432.2 270.6 432.2 279.5" className="st151" />
                          <path d="M432.2 284.6 432.2 292.3" className="st151" />
                          <path d="M432.2 297.4 432.2 306.2" className="st151" />
                          <path d="M432.2 307.5 432.2 307.7" className="st151" />
                          <path d="M424.2 269.1 424.2 269.3" className="st151" />
                          <path d="M424.2 270.6 424.2 279.5" className="st151" />
                          <path d="M424.2 284.6 424.2 292.3" className="st151" />
                          <path d="M424.2 297.4 424.2 306.2" className="st151" />
                          <path d="M424.2 307.5 424.2 307.7" className="st151" />
                          <path d="M416.1 269.1 416.1 269.3" className="st151" />
                          <path d="M416.1 270.6 416.1 279.5" className="st151" />
                          <path d="M416.1 284.6 416.1 292.3" className="st151" />
                          <path d="M416.1 297.4 416.1 306.2" className="st151" />
                          <path d="M416.1 307.5 416.1 307.7" className="st151" />
                          <path d="M408.1 269.1 408.1 269.3" className="st151" />
                          <path d="M408.1 270.6 408.1 279.5" className="st151" />
                          <path d="M408.1 284.6 408.1 292.3" className="st151" />
                          <path d="M408.1 297.4 408.1 306.2" className="st151" />
                          <path d="M408.1 307.5 408.1 307.7" className="st151" />
                          <path d="M400.1 269.1 400.1 269.3" className="st151" />
                          <path d="M400.1 270.6 400.1 279.5" className="st151" />
                          <path d="M400.1 284.6 400.1 292.3" className="st151" />
                          <path d="M400.1 297.4 400.1 306.2" className="st151" />
                          <path d="M400.1 307.5 400.1 307.7" className="st151" />
                          <path d="M407.3 349.2 407.3 349" className="st151" />
                          <path d="M407.3 347.8 407.3 312.1" className="st151" />
                          <path d="M407.3 310.9 407.3 310.7" className="st151" />
                          <path d="M415.4 349.2 415.4 349" className="st151" />
                          <path d="M415.4 347.8 415.4 312.1" className="st151" />
                          <path d="M415.4 310.9 415.4 310.7" className="st151" />
                          <path d="M423.4 349.2 423.4 349" className="st151" />
                          <path d="M423.4 347.8 423.4 312.1" className="st151" />
                          <path d="M423.4 310.9 423.4 310.7" className="st151" />
                          <path d="M431.4 349.2 431.4 349" className="st151" />
                          <path d="M431.4 347.8 431.4 312.1" className="st151" />
                          <path d="M431.4 310.9 431.4 310.7" className="st151" />
                          <path d="M439.4 349.2 439.4 349" className="st151" />
                          <path d="M439.4 347.8 439.4 312.1" className="st151" />
                          <path d="M439.4 310.9 439.4 310.7" className="st151" />
                          <path d="M447.5 349.2 447.5 349" className="st151" />
                          <path d="M447.5 347.8 447.5 312.1" className="st151" />
                          <path d="M447.5 310.9 447.5 310.7" className="st151" />
                          <path d="M455.5 349.2 455.5 349" className="st151" />
                          <path d="M455.5 347.8 455.5 312.1" className="st151" />
                          <path d="M455.5 310.9 455.5 310.7" className="st151" />
                          <path d="M463.5 349.2 463.5 349" className="st151" />
                          <path d="M463.5 347.8 463.5 312.1" className="st151" />
                          <path d="M463.5 310.9 463.5 310.7" className="st151" />
                          <path d="M463.5 269.1 463.5 269.3" className="st151" />
                          <path d="M463.5 270.6 463.5 306.2" className="st151" />
                          <path d="M463.5 307.5 463.5 307.7" className="st151" />
                          <path d="M455.5 269.1 455.5 269.3" className="st151" />
                          <path d="M455.5 270.6 455.5 306.2" className="st151" />
                          <path d="M455.5 307.5 455.5 307.7" className="st151" />
                          <path d="M447.5 269.1 447.5 269.3" className="st151" />
                          <path d="M447.5 270.6 447.5 306.2" className="st151" />
                          <path d="M447.5 307.5 447.5 307.7" className="st151" />
                          <path d="M439.4 269.1 439.4 269.3" className="st151" />
                          <path d="M439.4 270.6 439.4 306.2" className="st151" />
                          <path d="M439.4 307.5 439.4 307.7" className="st151" />
                          <path d="M431.4 269.1 431.4 269.3" className="st151" />
                          <path d="M431.4 270.6 431.4 306.2" className="st151" />
                          <path d="M431.4 307.5 431.4 307.7" className="st151" />
                          <path d="M423.4 269.1 423.4 269.3" className="st151" />
                          <path d="M423.4 270.6 423.4 306.2" className="st151" />
                          <path d="M423.4 307.5 423.4 307.7" className="st151" />
                          <path d="M415.4 269.1 415.4 269.3" className="st151" />
                          <path d="M415.4 270.6 415.4 306.2" className="st151" />
                          <path d="M415.4 307.5 415.4 307.7" className="st151" />
                          <path d="M407.3 269.1 407.3 269.3" className="st151" />
                          <path d="M407.3 270.6 407.3 306.2" className="st151" />
                          <path d="M407.3 307.5 407.3 307.7" className="st151" />
                          <path d="M399.3 269.1 399.3 269.3" className="st151" />
                          <path d="M399.3 270.6 399.3 306.2" className="st151" />
                          <path d="M399.3 307.5 399.3 307.7" className="st151" />
                          <path d="M472.4 306.2 398 306.2" className="st151" />
                          <path d="M398 307.5 471.3 307.5" className="st151" />
                          <path d="M473 311.5 473 306.6" className="st151" />
                          <path d="M471.7 307.8 471.7 310.9" className="st151" />
                          <path d="M399.3 312.1 472.3 312.1" className="st151" />
                          <path d="M472.3 310.9 399.3 310.9" className="st151" />
                          <path d="M471.5 307.4 471.7 307.3" className="st151" />
                          <path
                            d="M472.2 306.9 472.3 306.7 472.4 306.5 472.5 306.4 472.5 306.3 472.5 306.3 472.4 306.2 472.3 306.3 472.2 306.3 472.1 306.4 471.9 306.5 471.7 306.7 471.5 306.9 471.5 306.9"
                            className="st151"
                          />
                          <path
                            d="M472.3 306.9 472.3 306.9 472.5 306.7 472.7 306.6 472.8 306.5 472.9 306.5 473 306.5 473 306.6"
                            className="st151"
                          />
                          <path d="M472.5 310.9 472.3 310.9 472.5 310.9" className="st151" />
                          <path
                            d="M472.8 312 472.9 311.8 473 311.6 473 311.5 473 311.4 472.9 311.2 472.8 311 472.7 310.9 472.5 310.9 472.3 310.9 472.5 310.9 472.7 310.9 472.8 311 472.9 311.2 473 311.4 473 311.5 473 311.6 472.9 311.8 472.8 312"
                            className="st151"
                          />
                          <path
                            d="M399.3 310.9 399.3 310.9 399.3 311 399.3 311.2 399.3 311.4 399.3 311.5 399.3 311.6 399.3 311.8 399.3 312 399.3 312 399.3 312.1 399.3 312 399.3 312 399.3 311.8 399.3 311.6 399.3 311.5 399.3 311.4 399.3 311.2 399.3 311 399.3 310.9 399.3 310.9"
                            className="st151"
                          />
                          <path d="M399.3 312.1 399.3 310.9" className="st151" />
                          <path d="M473 306.9 471.7 306.9" className="st151" />
                          <path d="M471.7 310.9 399.3 310.9" className="st151" />
                          <path d="M471.7 306.9 471.7 310.9" className="st151" />
                          <path d="M473 312.1 399.3 312.1" className="st151" />
                          <path d="M473 306.9 473 312.1" className="st151" />
                          <path d="M471.5 306.2 471.5 307.5" className="st151" />
                          <path d="M398 307.5 471.5 307.5" className="st151" />
                          <path d="M398 306.2 471.5 306.2" className="st151" />
                          <path d="M471.7 269.3 398 269.3" className="st151" />
                          <path d="M398 270.6 471.7 270.6" className="st151" />
                          <path d="M509.9 269.3 471.7 269.3" className="st151" />
                          <path d="M471.7 270.6 508.6 270.6" className="st151" />
                          <path d="M509.9 349 509.9 269.3" className="st151" />
                          <path d="M508.6 270.6 508.6 347.8" className="st151" />
                          <path d="M479.4 349 509.9 349" className="st151" />
                          <path d="M508.6 347.8 479.4 347.8" className="st151" />
                          <path d="M471.2 349 479.4 349" className="st151" />
                          <path d="M479.4 347.8 471.2 347.8" className="st151" />
                          <path d="M399.3 349 471.2 349" className="st151" />
                          <path d="M471.2 347.8 399.3 347.8" className="st151" />
                          <path d="M471.5 270 471.5 270 471.5 269.9" className="st151" />
                          <path d="M509.2 270 509.2 270 509.3 269.9" className="st151" />
                          <path d="M509.2 348.3 509.2 348.4 509.3 348.5" className="st151" />
                          <path d="M479.6 348.3 479.6 348.4 479.6 348.5" className="st151" />
                          <path
                            d="M399.3 347.8 399.3 347.9 399.3 347.9 399.3 348.1 399.3 348.3 399.3 348.4 399.3 348.5 399.3 348.7 399.3 348.9 399.3 349 399.3 349 399.3 349 399.3 348.9 399.3 348.7 399.3 348.5 399.3 348.4 399.3 348.3 399.3 348.1 399.3 347.9 399.3 347.9 399.3 347.8"
                            className="st151"
                          />
                          <path d="M399.3 349 399.3 347.8" className="st151" />
                          <path d="M479.6 347.8 399.3 347.8" className="st151" />
                          <path d="M508.6 347.8 479.6 347.8" className="st151" />
                          <path d="M508.6 270.6 508.6 347.8" className="st151" />
                          <path d="M471.5 270.6 508.6 270.6" className="st151" />
                          <path d="M398 270.6 471.5 270.6" className="st151" />
                          <path d="M479.6 349 399.3 349" className="st151" />
                          <path d="M509.9 349 479.6 349" className="st151" />
                          <path d="M509.9 269.3 509.9 349" className="st151" />
                          <path d="M471.5 269.3 509.9 269.3" className="st151" />
                          <path d="M398 269.3 471.5 269.3" className="st151" />
                          <path d="M510.4 567.8 468.7 567.8" className="st152" />
                          <path d="M465.2 567.8 436.2 567.8" className="st152" />
                          <path d="M432.7 567.8 399.8 567.8" className="st152" />
                          <path d="M392.4 567.8 357.2 567.8" className="st152" />
                          <path d="M349.8 567.8 295.6 567.8" className="st152" />
                          <path d="M292.1 567.8 263 567.8" className="st152" />
                          <path d="M259.5 567.8 230.5 567.8" className="st152" />
                          <path d="M226.9 567.8 196.5 567.8" className="st152" />
                          <path d="M468.7 567.8 465.2 567.8" className="st151" />
                          <path d="M436.2 567.8 432.7 567.8" className="st151" />
                          <path d="M295.6 567.8 292.1 567.8" className="st151" />
                          <path d="M263 567.8 259.5 567.8" className="st151" />
                          <path d="M230.5 567.8 226.9 567.8" className="st151" />
                          <path d="M196.5 567.8 193 567.8" className="st151" />
                          <path
                            d="M517.8 567.8 517.8 267.5 510.4 267.5 510.4 351"
                            className="st152"
                          />
                          <path d="M510.4 358.4 510.4 434.7" className="st152" />
                          <path d="M510.4 438.3 510.4 473.8" className="st152" />
                          <path d="M510.4 477.4 510.4 567.8" className="st152" />
                          <path d="M510.4 434.7 510.4 438.3" className="st151" />
                          <path d="M510.4 473.8 510.4 477.4" className="st151" />
                          <path
                            d="M510.4 351 349.8 351 349.8 358.4 349.9 358.4"
                            className="st152"
                          />
                          <path d="M353.4 358.4 431.7 358.4" className="st152" />
                          <path d="M435.3 358.4 510.4 358.4" className="st152" />
                          <path d="M349.9 358.4 353.4 358.4" className="st151" />
                          <path d="M431.7 358.4 435.3 358.4" className="st151" />
                          <path d="M510.4 477.4 510.4 473.8" className="st151" />
                          <path d="M196.5 421.8 193 421.8" className="st152" />
                          <path d="M193 567.8 196.5 567.8" className="st151" />
                          <path d="M465.2 567.8 468.7 567.8" className="st151" />
                          <path d="M432.7 567.8 436.2 567.8" className="st151" />
                          <path
                            d="M353.4 422 353.4 421.8 349.9 421.8 196.5 421.8"
                            className="st152"
                          />
                          <path d="M431.7 358.4 431.7 422" className="st152" />
                          <path d="M435.3 358.4 431.7 358.4" className="st151" />
                          <path
                            d="M349.9 358.4 349.9 384.1 353.4 384.1 353.4 358.4"
                            className="st152"
                          />
                          <path d="M353.4 358.4 349.9 358.4" className="st151" />
                          <path d="M292.1 567.8 295.6 567.8" className="st151" />
                          <path d="M259.5 567.8 263 567.8" className="st151" />
                          <path d="M226.9 567.8 230.5 567.8" className="st151" />
                          <path d="M510.4 438.3 510.4 434.7" className="st151" />
                          <path d="M363.4 568.5 366.9 568 367.8 567.8" className="st151" />
                          <path d="M363.4 567.8 363.4 568.5" className="st152" />
                          <path d="M361.7 568.5 363.4 568.5" className="st152" />
                          <path d="M361.7 567.8 361.7 568.5" className="st152" />
                          <path d="M189.3 133.7 189.3 134.8" className="st152" />
                          <path
                            d="M189.3 142.2 196.6 142.2 196.6 133.7 189.3 133.7"
                            className="st152"
                          />
                          <path
                            d="M349.7 133.9 349.7 141.7 357 141.7 357 133.9 349.7 133.9"
                            className="st152"
                          />
                          <path d="M510.4 134.2 510.4 137.8" className="st152" />
                          <path d="M517.8 137.8 517.8 134.2 510.4 134.2" className="st152" />
                          <path d="M510.4 137.8 517.8 137.8" className="st151" />
                          <path d="M520.3 46.5 669.1 46.5" className="st151" />
                          <path d="M669.1 50 520.3 50 520.3 46.5" className="st151" />
                          <path d="M669.1 50 669.1 46.5" className="st151" />
                          <path
                            d="M187.4 34.3 187.4 45.2 194.8 45.2 194.8 34.3 187.4 34.3"
                            className="st152"
                          />
                          <path
                            d="M191.1 34.3 191.1 45.2 198.5 45.2 198.5 34.3 191.1 34.3"
                            className="st152"
                          />
                          <path
                            d="M348 34.3 348 45.2 355.4 45.2 355.4 34.3 348 34.3"
                            className="st152"
                          />
                          <path
                            d="M351.7 34.3 351.7 45.2 359.1 45.2 359.1 34.3 351.7 34.3"
                            className="st152"
                          />
                          <path
                            d="M508.6 34.3 508.6 45.2 516 45.2 516 34.3 508.6 34.3"
                            className="st152"
                          />
                          <path
                            d="M512.2 34.3 512.2 45.2 519.6 45.2 519.6 34.3 512.2 34.3"
                            className="st152"
                          />
                          <path
                            d="M669.1 34.3 669.1 50 676.6 50 676.6 34.3 669.1 34.3"
                            className="st152"
                          />
                          <path
                            d="M672.9 34.3 672.9 45.2 680.2 45.2 680.2 34.3 672.9 34.3"
                            className="st152"
                          />
                          <path
                            d="M667.3 141.6 678.2 141.6 678.2 134.2 667.3 134.2 667.3 141.6"
                            className="st152"
                          />
                          <path
                            d="M667.2 358.4 678.2 358.4 678.2 351 667.2 351 667.2 358.4"
                            className="st152"
                          />
                          <path d="M359.1 46.5 505.9 46.5" className="st151" />
                          <path d="M505.9 50 359.1 50 359.1 46.5" className="st151" />
                          <path d="M505.9 50 505.9 46.5" className="st151" />
                          <path d="M198.5 46.5 348 46.5" className="st151" />
                          <path d="M348 50 198.5 50 198.5 46.5" className="st151" />
                          <path d="M348 50 348 46.5" className="st151" />
                          <path
                            d="M678.2 567.8 667.2 567.8 667.2 575.2 678.2 575.2 678.2 567.8"
                            className="st152"
                          />
                          <path d="M508.3 267.2 373.4 267.2" className="st151" />
                          <path d="M373.4 264.3 508.3 264.3 508.3 267.2" className="st151" />
                          <path d="M373.4 264.3 373.4 267.2" className="st151" />
                          <path
                            d="M233.7 140.6 233.7 140.5 233.6 140.5 233.4 140.4 233.2 140.4"
                            className="st151"
                          />
                          <path d="M182.1 142.2 140.2 142.2" className="st151" />
                          <path d="M140.2 134.8 182.1 134.8 182.1 142.2" className="st151" />
                          <path d="M140.2 134.8 140.2 142.2" className="st151" />
                          <path d="M182.1 142.2 189.3 142.2" className="st152" />
                          <path d="M189.3 134.8 182.1 134.8 182.1 142.2" className="st152" />
                          <path d="M189.3 142.2 189.3 134.8" className="st151" />
                          <path d="M182.1 142.2 140.2 142.2" className="st151" />
                          <path d="M140.2 134.8 182.1 134.8" className="st151" />
                          <path d="M453.2 224.5 482.3 251.9" className="st151" />
                          <path d="M453.2 224.5 431.1 257.9" className="st151" />
                          <path d="M453.2 224.5 448.1 184.8" className="st151" />
                          <path d="M453.2 224.5 486.8 202.9" className="st151" />
                          <path d="M453.2 224.5 416.1 209.5" className="st151" />
                          <path d="M453.2 224.5 492.7 230.2" className="st151" />
                          <path d="M453.2 224.5 418.6 244.7" className="st151" />
                          <path d="M453.2 224.5 428.4 255.9" className="st151" />
                          <path d="M453.2 224.5 439.5 186.9" className="st151" />
                          <path d="M453.2 224.5 413.5 230.2" className="st151" />
                          <path d="M453.2 224.5 415.2 237.3" className="st151" />
                          <path d="M453.2 224.5 466.6 186.9" className="st151" />
                          <path d="M453.2 224.5 482.9 197.8" className="st151" />
                          <path d="M453.2 224.5 479.3 254.8" className="st151" />
                          <path d="M453.2 224.5 464.7 262.8" className="st151" />
                          <path d="M453.2 224.5 421.5 200.1" className="st151" />
                          <path
                            d="M453.2 264.5 457.8 264.2 462.3 263.4 466.8 262.1 471.1 260.2 475.1 257.9 478.9 255.1 482.2 251.9 485.2 248.4 487.8 244.5 489.9 240.4 491.4 236 492.5 231.5 493.1 226.9 493.1 222.2 492.5 217.6 491.4 213.1 489.9 208.7 487.8 204.6 485.2 200.6 482.2 197.1 478.9 193.9 475.1 191.1 471.1 188.8 466.8 186.9 462.3 185.6 457.8 184.8 453.2 184.5 448.5 184.8 443.9 185.6 439.4 186.9 435.2 188.8 431.1 191.1 427.5 193.9 424.1 197.1 421.1 200.6 418.5 204.6 416.5 208.7 414.8 213.1 413.7 217.6 413.2 222.2 413.2 226.9 413.7 231.5 414.8 236 416.5 240.4 418.5 244.5 421.1 248.4 424.1 251.9 427.5 255.1 431.1 257.9 435.2 260.2 439.4 262.1 443.9 263.4 448.5 264.2 453.2 264.5"
                            className="st151"
                          />
                          <path d="M667.2 573.2 517.8 573.2" className="st151" />
                          <path d="M517.8 569.7 667.2 569.7 667.2 573.2" className="st151" />
                          <path d="M517.8 569.7 517.8 573.2" className="st151" />
                          <path d="M518.6 345.4 517.9 345.2" className="st151" />
                          <path d="M518.4 347.5 518.6 347.5" className="st151" />
                          <path d="M518 346.2 518.4 346.2" className="st151" />
                          <path d="M518.2 347.1 518 347.1" className="st151" />
                          <path d="M518.4 347.5 518.6 347.5" className="st151" />
                          <path d="M518.4 346.3 518 346.2" className="st151" />
                          <path d="M518 347.1 518.4 347.5" className="st151" />
                          <path
                            d="M518 346.2 518 346.4 518 346.6 518 346.8 518 346.9 518 347 518 347.1"
                            className="st151"
                          />
                          <path d="M518 345.9 518 346.2" className="st151" />
                          <path
                            d="M518.2 347.1 518.2 347 518.2 347 518.2 346.8 518.3 346.6 518.3 346.4 518.4 346.3"
                            className="st151"
                          />
                          <path d="M518.6 347.5 518.2 347.1" className="st151" />
                          <path
                            d="M518.9 347 518.8 347.2 518.8 347.4 518.7 347.5 518.6 347.5"
                            className="st151"
                          />
                          <path d="M519.8 409.6 519.1 409.5" className="st151" />
                          <path d="M519.6 411.8 519.9 411.8" className="st151" />
                          <path d="M519.2 410.4 519.6 410.5" className="st151" />
                          <path d="M519.4 411.4 519.2 411.3" className="st151" />
                          <path d="M519.6 411.8 519.9 411.8" className="st151" />
                          <path d="M519.6 410.5 519.2 410.4" className="st151" />
                          <path d="M519.2 411.3 519.6 411.8" className="st151" />
                          <path
                            d="M519.2 410.4 519.2 410.6 519.2 410.8 519.2 411 519.2 411.2 519.2 411.2 519.2 411.3"
                            className="st151"
                          />
                          <path d="M519.2 410.1 519.2 410.4" className="st151" />
                          <path
                            d="M519.4 411.4 519.4 411.3 519.4 411.2 519.4 411.1 519.5 410.9 519.5 410.7 519.6 410.5"
                            className="st151"
                          />
                          <path d="M519.9 411.8 519.4 411.4" className="st151" />
                          <path d="M133.3 296.3 133.3 425.4" className="st152" />
                          <path d="M136.8 425.4 136.8 296.3" className="st152" />
                          <path
                            d="M193 421.8 183.4 421.8 183.4 425.4 184 425.4"
                            className="st152"
                          />
                          <path
                            d="M384.5 367.8 384.4 366.9 383.9 366 383.1 365.2 382.2 364.4 381 363.8 379.5 363.4 378 363.2 376.5 363 374.9 363.2 373.4 363.4 372.1 363.8 370.8 364.4 369.8 365.2 369.3 365.7"
                            className="st151"
                          />
                          <path
                            d="M368.8 366.6 368.6 366.9 368.5 367.8 368.6 368.8 369.1 369.7 369.8 370.6 370.8 371.2 372.1 371.9 373.4 372.3 374.9 372.6 376.5 372.7 378 372.6 379.5 372.3 381 371.9 382.2 371.2 383.1 370.6 383.9 369.7 384.4 368.8 384.5 367.8"
                            className="st151"
                          />
                          <path
                            d="M383.9 367.8 383.8 368.6 383.4 369.3 382.7 370 381.9 370.7 380.7 371.2 379.4 371.7 378 371.9 376.5 372.1 375 371.9 373.6 371.7 372.3 371.2 371.2 370.7 370.2 370 369.6 369.3 369.2 368.6 369.1 367.8 369.2 367.1 369.3 366.8"
                            className="st151"
                          />
                          <path
                            d="M370 365.9 370.2 365.7 371.2 365 372.3 364.4 373.6 364 375 363.8 376.5 363.7 378 363.8 379.4 364 380.7 364.4 381.9 365 382.7 365.7 383.4 366.4 383.8 367.1 383.9 367.8"
                            className="st151"
                          />
                          <path
                            d="M383.6 367.8 383.4 367.2 383.1 366.5 382.5 365.8 381.7 365.3 380.8 364.8 379.7 364.4 378.5 364.2 377.2 364 375.9 364 374.6 364.2 373.4 364.4 372.3 364.8 371.2 365.3 370.5 365.8 370.2 366.1"
                            className="st151"
                          />
                          <path
                            d="M369.6 367 369.5 367.2 369.4 367.8 369.5 368.6 369.9 369.3 370.5 369.9 371.2 370.4 372.3 370.9 373.4 371.3 374.6 371.6 375.9 371.7 377.2 371.7 378.5 371.6 379.7 371.3 380.8 370.9 381.7 370.4 382.5 369.9 383.1 369.3 383.4 368.6 383.6 367.8 383.4 368.6 383.1 369.3 382.5 369.9 381.7 370.4 380.8 370.9 379.7 371.3 378.5 371.6 377.2 371.7 375.9 371.7 374.6 371.6 373.4 371.3 372.3 370.9 371.2 370.4 370.5 369.9 369.9 369.3 369.5 368.6 369.4 367.8 369.5 367.2 369.6 367"
                            className="st151"
                          />
                          <path
                            d="M370.2 366.1 370.5 365.8 371.2 365.3 372.3 364.8 373.4 364.4 374.6 364.2 375.9 364 377.2 364 378.5 364.2 379.7 364.4 380.8 364.8 381.7 365.3 382.5 365.8 383.1 366.5 383.4 367.2 383.6 367.8"
                            className="st151"
                          />
                          <path d="M366.1 364.1 365.7 365.1" className="st151" />
                          <path d="M370.7 367.5 371.2 366.6" className="st151" />
                          <path d="M370.7 367.5 370.3 367.3" className="st151" />
                          <path
                            d="M370.8 366.4 371.2 366.6 370.7 367.5 370.6 367.4 370.2 367.2 369.5 366.9 368.6 366.5 367.8 366.1 366.9 365.7 366.3 365.3 365.8 365.1 365.7 365.1"
                            className="st151"
                          />
                          <path
                            d="M370.8 366.4 370.6 366.3 370.2 366.1 369.5 365.7 368.7 365.3 367.8 364.9 367.2 364.6 366.7 364.4 366.6 364.3"
                            className="st151"
                          />
                          <path d="M365.7 365.1 366.1 364.1" className="st151" />
                          <path d="M366.6 364.3 366.1 364.1" className="st151" />
                          <path
                            d="M365.7 365.1 366.1 365.3 366.3 365.3 366.7 365.5 367.4 365.9 368.2 366.3 369 366.7 369.7 367 370.2 367.2 370.3 367.3"
                            className="st151"
                          />
                          <path
                            d="M366.1 364.1 366.3 364.2 366.7 364.4 367.4 364.7 368.2 365.1 369.1 365.5 369.9 365.9 370.6 366.3 371 366.5 371.2 366.6"
                            className="st151"
                          />
                          <path
                            d="M417.1 367.8 417 366.9 416.5 366 415.8 365.2 414.8 364.4 413.5 363.8 412.2 363.4 410.7 363.2 409.1 363 407.5 363.2 406.1 363.4 404.6 363.8 403.4 364.4 402.4 365.2 402 365.7"
                            className="st151"
                          />
                          <path
                            d="M401.4 366.6 401.2 366.9 401.1 367.8 401.2 368.8 401.7 369.7 402.4 370.6 403.4 371.2 404.6 371.9 406.1 372.3 407.5 372.6 409.1 372.7 410.7 372.6"
                            className="st151"
                          />
                          <path
                            d="M410.7 372.6 412.2 372.3 413.5 371.9 414.8 371.2 415.8 370.6 416.5 369.7 417 368.8 417.1 367.8"
                            className="st151"
                          />
                          <path
                            d="M416.5 367.8 416.4 368.6 416 369.3 415.4 370 414.4 370.7 413.3 371.2 412 371.7 410.6 371.9 409.1 372.1 407.6 371.9 406.2 371.7 404.9 371.2 403.7 370.7 402.9 370 402.2 369.3 401.8 368.6 401.7 367.8 401.8 367.1 402 366.8"
                            className="st151"
                          />
                          <path
                            d="M402.6 365.9 402.9 365.7 403.7 365 404.9 364.4 406.2 364 407.6 363.8 409.1 363.7 410.6 363.8 412 364 413.3 364.4 414.4 365 415.4 365.7 416 366.4 416.4 367.1 416.5 367.8"
                            className="st151"
                          />
                          <path
                            d="M416.2 367.8 416 367.2 415.7 366.5 415.1 365.8 414.3 365.3 413.3 364.8 412.2 364.4 411 364.2 409.7 364 408.4 364 407.1 364.2 405.9 364.4 404.8 364.8 403.9 365.3 403.1 365.8 402.9 366.1"
                            className="st151"
                          />
                          <path
                            d="M402.2 367 402.2 367.2 402 367.8 402.2 368.6 402.5 369.3 403.1 369.9 403.9 370.4 404.8 370.9 405.9 371.3 407.1 371.6 408.4 371.7 409.7 371.7 411 371.6 412.2 371.3 413.3 370.9 414.3 370.4 415.1 369.9 415.7 369.3 416 368.6 416.2 367.8 416 368.6 415.7 369.3 415.1 369.9 414.3 370.4 413.3 370.9 412.2 371.3 411 371.6 409.7 371.7 408.4 371.7 407.1 371.6 405.9 371.3 404.8 370.9 403.9 370.4 403.1 369.9 402.5 369.3 402.2 368.6 402 367.8 402.2 367.2 402.2 367"
                            className="st151"
                          />
                          <path
                            d="M402.9 366.1 403.1 365.8 403.9 365.3 404.8 364.8 405.9 364.4 407.1 364.2 408.4 364 409.7 364 411 364.2 412.2 364.4 413.3 364.8 414.3 365.3 415.1 365.8 415.7 366.5 416 367.2 416.2 367.8"
                            className="st151"
                          />
                          <path d="M398.7 364.1 398.2 365.1" className="st151" />
                          <path d="M403.3 367.5 403.8 366.6" className="st151" />
                          <path d="M403.3 367.5 402.9 367.3" className="st151" />
                          <path
                            d="M403.3 366.4 403.8 366.6 403.3 367.5 403.2 367.4 402.7 367.2 402 366.9 401.2 366.5 400.3 366.1 399.5 365.7 398.8 365.3 398.4 365.1 398.2 365.1"
                            className="st151"
                          />
                          <path
                            d="M403.3 366.4 403.2 366.3 402.7 366.1 402 365.7 401.2 365.3 400.5 364.9 399.8 364.6 399.3 364.4 399.2 364.3"
                            className="st151"
                          />
                          <path d="M398.2 365.1 398.7 364.1" className="st151" />
                          <path d="M399.2 364.3 398.7 364.1" className="st151" />
                          <path
                            d="M398.2 365.1 398.7 365.3 398.8 365.3 399.3 365.5 400 365.9 400.8 366.3 401.6 366.7 402.2 367 402.7 367.2 402.9 367.3"
                            className="st151"
                          />
                          <path
                            d="M398.7 364.1 398.8 364.2 399.3 364.4 400 364.7 400.8 365.1 401.7 365.5 402.5 365.9 403.2 366.3 403.6 366.5 403.8 366.6"
                            className="st151"
                          />
                          <path d="M398 267.5 398 351" className="st151" />
                          <path
                            d="M510.4 267.5 398 267.5 511.2 267.5 511.2 142.8 328.7 142.8"
                            className="st151"
                          />
                          <path
                            d="M198.6 137.2 233.9 137.2 233.9 136.4 198.6 136.4 198.6 137.2"
                            className="st153"
                          />
                          <path
                            d="M235.8 137.2 272.2 137.2 272.2 136.4 235.8 136.4 235.8 137.2"
                            className="st153"
                          />
                          <path
                            d="M274.1 137.2 310.5 137.2 310.5 136.4 274.1 136.4 274.1 137.2"
                            className="st153"
                          />
                          <path
                            d="M312.4 137.2 347.7 137.2 347.7 136.4 312.4 136.4 312.4 137.2"
                            className="st153"
                          />
                          <path d="M311.4 139.8 311.4 140.4 198.6 140.4" className="st151" />
                          <path d="M233.9 135.6 198.6 135.6" className="st151" />
                          <path d="M272.2 135.6 235.8 135.6" className="st151" />
                          <path d="M310.5 135.6 274.1 135.6" className="st151" />
                          <path d="M347.7 140.4 312.4 140.4" className="st151" />
                          <path d="M347.7 135.6 312.4 135.6" className="st151" />
                          <path
                            d="M347.7 140.4 349.7 140.4 349.7 135.6 347.7 135.6 347.7 140.4"
                            className="st152"
                          />
                          <path
                            d="M196.6 140.4 198.6 140.4 198.6 135.6 196.6 135.6 196.6 140.4"
                            className="st152"
                          />
                          <path
                            d="M233.9 140.4 235.8 140.4 235.8 135.6 233.9 135.6 233.9 140.4"
                            className="st152"
                          />
                          <path
                            d="M272.2 140.4 274.1 140.4 274.1 135.6 272.2 135.6 272.2 140.4"
                            className="st152"
                          />
                          <path
                            d="M310.5 140.4 312.4 140.4 312.4 135.6 310.5 135.6 310.5 140.4"
                            className="st152"
                          />
                          <path
                            d="M359 137.1 394.4 137.1 394.4 136.2 359 136.2 359 137.1"
                            className="st153"
                          />
                          <path
                            d="M396.4 137.1 432.8 137.1 432.8 136.2 396.4 136.2 396.4 137.1"
                            className="st153"
                          />
                          <path
                            d="M434.7 137.1 471.1 137.1 471.1 136.2 434.7 136.2 434.7 137.1"
                            className="st153"
                          />
                          <path
                            d="M473.1 137.1 508.5 137.1 508.5 136.2 473.1 136.2 473.1 137.1"
                            className="st153"
                          />
                          <path d="M394.4 140.2 359 140.2" className="st151" />
                          <path d="M394.4 135.4 359 135.4" className="st151" />
                          <path d="M432.8 140.2 396.4 140.2" className="st151" />
                          <path d="M432.8 135.4 396.4 135.4" className="st151" />
                          <path d="M471.1 140.2 434.7 140.2" className="st151" />
                          <path d="M471.1 135.4 434.7 135.4" className="st151" />
                          <path d="M508.5 140.2 473.1 140.2" className="st151" />
                          <path d="M508.5 135.4 473.1 135.4" className="st151" />
                          <path
                            d="M508.5 140.2 510.4 140.2 510.4 135.4 508.5 135.4 508.5 140.2"
                            className="st152"
                          />
                          <path
                            d="M357 140.2 359 140.2 359 135.4 357 135.4 357 140.2"
                            className="st152"
                          />
                          <path
                            d="M394.4 140.2 396.4 140.2 396.4 135.4 394.4 135.4 394.4 140.2"
                            className="st152"
                          />
                          <path
                            d="M432.8 140.2 434.7 140.2 434.7 135.4 432.8 135.4 432.8 140.2"
                            className="st152"
                          />
                          <path
                            d="M471.1 140.2 473.1 140.2 473.1 135.4 471.1 135.4 471.1 140.2"
                            className="st152"
                          />
                          <path
                            d="M514.9 139.7 514.9 180.1 515.7 180.1 515.7 139.7 514.9 139.7"
                            className="st153"
                          />
                          <path
                            d="M514.9 182 514.9 223.3 515.7 223.3 515.7 182 514.9 182"
                            className="st153"
                          />
                          <path
                            d="M514.9 225.2 514.9 265.5 515.7 265.5 515.7 225.2 514.9 225.2"
                            className="st153"
                          />
                          <path d="M511.7 180.1 511.7 141.3" className="st151" />
                          <path d="M516.5 180.1 516.5 141.3" className="st151" />
                          <path d="M511.7 223.3 511.7 182" className="st151" />
                          <path d="M516.5 223.3 516.5 182" className="st151" />
                          <path d="M511.7 265.5 511.7 225.2" className="st151" />
                          <path d="M516.5 265.5 516.5 225.2" className="st151" />
                          <path
                            d="M511.7 265.5 511.7 267.5 516.5 267.5 516.5 265.5 511.7 265.5"
                            className="st152"
                          />
                          <path
                            d="M511.7 137.8 511.7 139.7 516.5 139.7 516.5 137.8 511.7 137.8"
                            className="st152"
                          />
                          <path
                            d="M511.7 180.1 511.7 182 516.5 182 516.5 180.1 511.7 180.1"
                            className="st152"
                          />
                          <path
                            d="M511.7 223.3 511.7 225.2 516.5 225.2 516.5 223.3 511.7 223.3"
                            className="st152"
                          />
                          <path d="M510.4 137.8 510.4 141.3 513.1 141.3" className="st154" />
                          <path d="M515.1 141.3 517.8 141.3 517.8 137.8" className="st154" />
                          <path d="M517.8 137.8 510.4 137.8" className="st155" />
                          <path d="M142.3 140.9 180 140.9" className="st153" />
                          <path d="M181 140.2 181 134.8" className="st153" />
                          <path d="M182.1 134.8 181 134.8" className="st153" />
                          <path d="M180 140.2 181.4 140.2" className="st153" />
                          <path d="M180 141.6 180 140.2" className="st153" />
                          <path d="M181.4 141.6 180 141.6" className="st153" />
                          <path d="M181.4 142.2 181.4 140.2" className="st153" />
                          <path d="M182 142.2 181.4 142.2" className="st153" />
                          <path d="M141.3 140.2 141.3 134.8" className="st153" />
                          <path d="M142.3 141.6 142.3 140.2" className="st153" />
                          <path d="M140.9 142.2 140.9 140.2 142.3 140.2" className="st153" />
                          <path d="M140.9 141.6 142.3 141.6" className="st153" />
                          <path d="M140.2 134.8 141.3 134.8" className="st153" />
                          <path d="M140.2 142.2 140.9 142.2" className="st153" />
                          <path d="M517.8 133.8 196.6 133.8" className="st151" />
                          <path d="M198.5 45.2 199.1 45.2" className="st151" />
                          <path d="M236 45.2 256.5 45.2" className="st151" />
                          <path d="M293.4 45.2 309.8 45.2" className="st151" />
                          <path d="M346.7 45.2 348 45.2" className="st151" />
                          <path d="M359.1 45.2 359.8 45.2" className="st151" />
                          <path d="M398.9 45.2 416.1 45.2" className="st151" />
                          <path d="M455.3 45.2 467.6 45.2" className="st151" />
                          <path d="M506.8 45.2 508.6 45.2" className="st151" />
                          <path d="M519.6 45.2 521.6 45.2" className="st151" />
                          <path d="M560.8 45.2 580.1 45.2" className="st151" />
                          <path d="M619.2 45.2 629.5 45.2" className="st151" />
                          <path d="M668.7 45.2 669.1 45.2" className="st151" />
                          <path d="M669.1 50 669.1 51.7" className="st151" />
                          <path d="M669.1 90.9 669.1 93.5" className="st151" />
                          <path d="M669.1 132.7 669.1 134.2" className="st151" />
                          <path d="M669.1 141.6 669.1 144.3" className="st151" />
                          <path d="M669.1 183.4 669.1 185.3" className="st151" />
                          <path d="M669.1 224.5 669.1 229.6" className="st151" />
                          <path d="M669.1 268.8 669.1 270.8" className="st151" />
                          <path d="M669.1 310 669.1 310.6" className="st151" />
                          <path d="M669.1 349.8 669.1 351" className="st151" />
                          <path d="M669.1 358.4 669.1 359.4" className="st151" />
                          <path d="M669.1 398.6 669.1 401.2" className="st151" />
                          <path d="M669.1 440.4 669.1 443" className="st151" />
                          <path d="M669.1 482.1 669.1 485.3" className="st151" />
                          <path d="M669.1 524.5 669.1 527.7" className="st151" />
                          <path d="M669.1 566.9 669.1 567.8" className="st151" />
                          <path d="M517.8 267.5 517.8 141.3" className="st151" />
                          <path d="M517.8 134.2 517.8 133.8 517.8 567.8" className="st151" />
                          <path d="M517.8 569.7 667.2 569.7" className="st151" />
                          <path d="M669.1 567.8 669.1 566.9" className="st151" />
                          <path d="M669.1 527.7 669.1 524.5" className="st151" />
                          <path d="M669.1 485.3 669.1 482.1" className="st151" />
                          <path d="M669.1 443 669.1 440.4" className="st151" />
                          <path d="M669.1 401.2 669.1 398.6" className="st151" />
                          <path d="M669.1 359.4 669.1 358.4" className="st151" />
                          <path d="M669.1 351 669.1 349.8" className="st151" />
                          <path d="M669.1 310.6 669.1 310" className="st151" />
                          <path d="M669.1 270.8 669.1 268.8" className="st151" />
                          <path d="M669.1 229.6 669.1 224.5" className="st151" />
                          <path d="M669.1 185.3 669.1 183.4" className="st151" />
                          <path d="M669.1 144.3 669.1 141.6" className="st151" />
                          <path d="M669.1 134.2 669.1 132.7" className="st151" />
                          <path d="M669.1 93.5 669.1 90.9" className="st151" />
                          <path d="M669.1 51.7 669.1 50" className="st151" />
                          <path d="M669.1 45.2 668.7 45.2" className="st151" />
                          <path d="M629.5 45.2 619.2 45.2" className="st151" />
                          <path d="M580.1 45.2 560.8 45.2" className="st151" />
                          <path d="M521.6 45.2 506.8 45.2" className="st151" />
                          <path d="M467.6 45.2 455.3 45.2" className="st151" />
                          <path d="M416.1 45.2 398.9 45.2" className="st151" />
                          <path d="M359.8 45.2 346.7 45.2" className="st151" />
                          <path d="M309.8 45.2 293.4 45.2" className="st151" />
                          <path d="M256.5 45.2 236 45.2" className="st151" />
                          <path d="M196.6 133.8 517.8 133.8" className="st151" />
                          <path d="M569.3 535.4 569.2 536.2" className="st151" />
                          <path d="M568.5 535.2 568.3 535.6" className="st151" />
                          <path d="M568.3 535.6 568.5 535.2" className="st151" />
                          <path d="M568.3 535.6 568.7 535.8" className="st151" />
                          <path
                            d="M567.6 535.2 567.6 535.2 567.7 535.3 567.8 535.4 568 535.4 568.2 535.5 568.3 535.6"
                            className="st151"
                          />
                          <path d="M586.1 484.6 586.1 484.2" className="st151" />
                          <path
                            d="M666.5 50.4 521.2 50.4 521.8 58.6 522.1 60.2 522.6 61.7 523.5 63.1 524.6 64.3 525.8 65.3 527.3 66.1 528.8 66.5"
                            className="st151"
                          />
                          <path
                            d="M528.8 66.5 658.5 66.5 660.2 66.2 661.8 65.5 663.3 64.6 664.5 63.4 665.5 61.9 666.2 60.2 666.5 58.5 666.5 50.4"
                            className="st151"
                          />
                          <path d="M398.9 34.3 396.1 34.3" className="st151" />
                          <path d="M394.1 34.3 391.5 34.3" className="st151" />
                          <path d="M389.6 34.3 387 34.3" className="st151" />
                          <path d="M385.1 34.3 382.5 34.3" className="st151" />
                          <path d="M380.6 34.3 378 34.3" className="st151" />
                          <path d="M376.1 34.3 373.6 34.3" className="st151" />
                          <path d="M371.6 34.3 369.1 34.3" className="st151" />
                          <path d="M367.1 34.3 364.5 34.3" className="st151" />
                          <path d="M362.6 34.3 359.8 34.3 359.8 36.9" className="st151" />
                          <path d="M359.8 38.9 359.8 41.4" className="st151" />
                          <path d="M359.8 43.4 359.8 46 362.6 46" className="st151" />
                          <path d="M364.5 46 367.1 46" className="st151" />
                          <path d="M369.1 46 371.6 46" className="st151" />
                          <path d="M373.6 46 376.1 46" className="st151" />
                          <path d="M378 46 380.6 46" className="st151" />
                          <path d="M382.5 46 385.1 46" className="st151" />
                          <path d="M387 46 389.6 46" className="st151" />
                          <path d="M391.5 46 394.1 46" className="st151" />
                          <path d="M396.1 46 398.9 46 398.9 43.4" className="st151" />
                          <path d="M398.9 41.4 398.9 38.9" className="st151" />
                          <path d="M398.9 36.9 398.9 34.3" className="st151" />
                          <path d="M361.3 35.9 362.6 35.9" className="st151" />
                          <path d="M364.5 35.9 367.1 35.9" className="st151" />
                          <path d="M369.1 35.9 371.6 35.9" className="st151" />
                          <path d="M373.6 35.9 376.1 35.9" className="st151" />
                          <path d="M378 35.9 380.6 35.9" className="st151" />
                          <path d="M382.5 35.9 385.1 35.9" className="st151" />
                          <path d="M387 35.9 389.6 35.9" className="st151" />
                          <path d="M391.5 35.9 394.1 35.9" className="st151" />
                          <path d="M396.1 35.9 397.3 35.9 397.3 44.4" className="st151" />
                          <path d="M361.3 36.1 361.3 35.9" className="st151" />
                          <path d="M236 34.3 234.3 34.3" className="st151" />
                          <path d="M232.4 34.3 229.8 34.3" className="st151" />
                          <path d="M227.9 34.3 225.3 34.3" className="st151" />
                          <path d="M223.4 34.3 220.8 34.3" className="st151" />
                          <path d="M218.9 34.3 216.3 34.3" className="st151" />
                          <path d="M214.4 34.3 211.8 34.3" className="st151" />
                          <path d="M209.9 34.3 207.3 34.3" className="st151" />
                          <path d="M205.4 34.3 202.9 34.3" className="st151" />
                          <path d="M200.9 34.3 199.1 34.3 199.1 36.9" className="st151" />
                          <path d="M199.1 38.9 199.1 41.4" className="st151" />
                          <path d="M199.1 43.4 199.1 46 200.9 46" className="st151" />
                          <path d="M202.9 46 205.4 46" className="st151" />
                          <path d="M207.3 46 209.9 46" className="st151" />
                          <path d="M211.8 46 214.4 46" className="st151" />
                          <path d="M216.3 46 218.9 46" className="st151" />
                          <path d="M220.8 46 223.4 46" className="st151" />
                          <path d="M225.3 46 227.9 46" className="st151" />
                          <path d="M229.8 46 232.4 46" className="st151" />
                          <path d="M234.3 46 236 46 236 43.4" className="st151" />
                          <path d="M236 41.4 236 38.9" className="st151" />
                          <path d="M236 36.9 236 34.3" className="st151" />
                          <path d="M200.7 35.9 205.4 35.9" className="st151" />
                          <path d="M207.3 35.9 209.9 35.9" className="st151" />
                          <path d="M211.8 35.9 214.4 35.9" className="st151" />
                          <path d="M216.3 35.9 218.9 35.9" className="st151" />
                          <path d="M220.8 35.9 223.4 35.9" className="st151" />
                          <path d="M225.3 35.9 227.9 35.9" className="st151" />
                          <path d="M229.8 35.9 234.5 35.9 234.5 44.4" className="st151" />
                          <path d="M200.7 44.4 200.7 35.9" className="st151" />
                          <path
                            d="M345.3 50.4 200.1 50.4 200.7 58.6 201 60.2 201.5 61.7 202.3 63.1 203.4 64.3 204.7 65.3 206.1 66.1 207.7 66.5 337.3 66.5 339 66.2 340.7 65.5 342.1 64.6 343.4 63.4 344.3 61.9 345 60.2 345.3 58.5 345.3 50.4"
                            className="st151"
                          />
                          <path d="M680.1 51.7 677.4 51.7" className="st151" />
                          <path d="M675.5 51.7 672.9 51.7" className="st151" />
                          <path d="M671 51.7 668.4 51.7 668.4 54.6" className="st151" />
                          <path d="M668.4 56.6 668.4 59.1" className="st151" />
                          <path d="M668.4 61 668.4 63.6" className="st151" />
                          <path d="M668.4 65.5 668.4 68.1" className="st151" />
                          <path d="M668.4 70 668.4 72.6" className="st151" />
                          <path d="M668.4 74.5 668.4 77.1" className="st151" />
                          <path d="M668.4 79.1 668.4 81.6" className="st151" />
                          <path d="M668.4 83.5 668.4 86.1" className="st151" />
                          <path d="M668.4 88 668.4 90.9 671 90.9" className="st151" />
                          <path d="M672.9 90.9 675.5 90.9" className="st151" />
                          <path d="M677.4 90.9 680.1 90.9 680.1 88" className="st151" />
                          <path d="M680.1 86.1 680.1 83.5" className="st151" />
                          <path d="M680.1 81.6 680.1 79.1" className="st151" />
                          <path d="M680.1 77.1 680.1 74.5" className="st151" />
                          <path d="M680.1 72.6 680.1 70" className="st151" />
                          <path d="M680.1 68.1 680.1 65.5" className="st151" />
                          <path d="M680.1 63.6 680.1 61" className="st151" />
                          <path d="M680.1 59.1 680.1 56.6" className="st151" />
                          <path d="M680.1 54.6 680.1 51.7" className="st151" />
                          <path d="M678.5 89.3 670 89.3 670 88" className="st151" />
                          <path d="M670 86.1 670 83.5" className="st151" />
                          <path d="M670 81.6 670 79.1" className="st151" />
                          <path d="M670 77.1 670 74.5" className="st151" />
                          <path d="M670 72.6 670 70" className="st151" />
                          <path d="M670 68.1 670 65.5" className="st151" />
                          <path d="M670 63.6 670 61" className="st151" />
                          <path d="M670 59.1 670 56.6" className="st151" />
                          <path d="M670 54.6 670 53.4 678.5 53.4 678.5 54.6" className="st151" />
                          <path d="M678.5 56.6 678.5 59.1" className="st151" />
                          <path d="M678.5 61 678.5 63.6" className="st151" />
                          <path d="M678.5 65.5 678.5 68.1" className="st151" />
                          <path d="M678.5 70 678.5 72.6" className="st151" />
                          <path d="M678.5 74.5 678.5 77.1" className="st151" />
                          <path d="M678.5 79.1 678.5 81.6" className="st151" />
                          <path d="M678.5 83.5 678.5 86.1" className="st151" />
                          <path d="M678.5 88 678.5 89.3" className="st151" />
                          <path d="M680.1 144.3 677.4 144.3" className="st151" />
                          <path d="M675.5 144.3 672.9 144.3" className="st151" />
                          <path d="M671 144.3 668.4 144.3 668.4 147.1" className="st151" />
                          <path d="M668.4 149.1 668.4 151.7" className="st151" />
                          <path d="M668.4 153.6 668.4 156.2" className="st151" />
                          <path d="M668.4 158.1 668.4 160.6" className="st151" />
                          <path d="M668.4 162.5 668.4 165.1" className="st151" />
                          <path d="M668.4 167 668.4 169.6" className="st151" />
                          <path d="M668.4 171.6 668.4 174.1" className="st151" />
                          <path d="M668.4 176.1 668.4 178.6" className="st151" />
                          <path d="M668.4 180.6 668.4 183.4 671 183.4" className="st151" />
                          <path d="M672.9 183.4 675.5 183.4" className="st151" />
                          <path d="M677.4 183.4 680.1 183.4 680.1 180.6" className="st151" />
                          <path d="M680.1 178.6 680.1 176.1" className="st151" />
                          <path d="M680.1 174.1 680.1 171.6" className="st151" />
                          <path d="M680.1 169.6 680.1 167" className="st151" />
                          <path d="M680.1 165.1 680.1 162.5" className="st151" />
                          <path d="M680.1 160.6 680.1 158.1" className="st151" />
                          <path d="M680.1 156.2 680.1 153.6" className="st151" />
                          <path d="M680.1 151.7 680.1 149.1" className="st151" />
                          <path d="M680.1 147.1 680.1 144.3" className="st151" />
                          <path d="M678.5 181.9 670 181.9 670 180.6" className="st151" />
                          <path d="M670 178.6 670 176.1" className="st151" />
                          <path d="M670 174.1 670 171.6" className="st151" />
                          <path d="M670 169.6 670 167" className="st151" />
                          <path d="M670 165.1 670 162.5" className="st151" />
                          <path d="M670 160.6 670 158.1" className="st151" />
                          <path d="M670 156.2 670 153.6" className="st151" />
                          <path d="M670 151.7 670 149.1" className="st151" />
                          <path
                            d="M670 147.1 670 145.9 678.5 145.9 678.5 147.1"
                            className="st151"
                          />
                          <path d="M678.5 149.1 678.5 151.7" className="st151" />
                          <path d="M678.5 153.6 678.5 156.2" className="st151" />
                          <path d="M678.5 158.1 678.5 160.6" className="st151" />
                          <path d="M678.5 162.5 678.5 165.1" className="st151" />
                          <path d="M678.5 167 678.5 169.6" className="st151" />
                          <path d="M678.5 171.6 678.5 174.1" className="st151" />
                          <path d="M678.5 176.1 678.5 178.6" className="st151" />
                          <path d="M678.5 180.6 678.5 181.9" className="st151" />
                          <path d="M680.1 359.4 677.4 359.4" className="st151" />
                          <path d="M675.5 359.4 672.9 359.4" className="st151" />
                          <path d="M671 359.4 668.4 359.4 668.4 362.3" className="st151" />
                          <path d="M668.4 364.2 668.4 366.8" className="st151" />
                          <path d="M668.4 368.7 668.4 371.3" className="st151" />
                          <path d="M668.4 373.3 668.4 375.8" className="st151" />
                          <path d="M668.4 377.8 668.4 380.3" className="st151" />
                          <path d="M668.4 382.3 668.4 384.8" className="st151" />
                          <path d="M668.4 386.7 668.4 389.3" className="st151" />
                          <path d="M668.4 391.2 668.4 393.8" className="st151" />
                          <path d="M668.4 395.7 668.4 398.6 671 398.6" className="st151" />
                          <path d="M672.9 398.6 675.5 398.6" className="st151" />
                          <path d="M677.4 398.6 680.1 398.6 680.1 395.7" className="st151" />
                          <path d="M680.1 393.8 680.1 391.2" className="st151" />
                          <path d="M680.1 389.3 680.1 386.7" className="st151" />
                          <path d="M680.1 384.8 680.1 382.3" className="st151" />
                          <path d="M680.1 380.3 680.1 377.8" className="st151" />
                          <path d="M680.1 375.8 680.1 373.3" className="st151" />
                          <path d="M680.1 371.3 680.1 368.7" className="st151" />
                          <path d="M680.1 366.8 680.1 364.2" className="st151" />
                          <path d="M680.1 362.3 680.1 359.4" className="st151" />
                          <path d="M678.5 397 670 397 670 395.7" className="st151" />
                          <path d="M670 393.8 670 391.2" className="st151" />
                          <path d="M670 389.3 670 386.7" className="st151" />
                          <path d="M670 384.8 670 382.3" className="st151" />
                          <path d="M670 380.3 670 377.8" className="st151" />
                          <path d="M670 375.8 670 373.3" className="st151" />
                          <path d="M670 371.3 670 368.7" className="st151" />
                          <path d="M670 366.8 670 364.2" className="st151" />
                          <path
                            d="M670 362.3 670 361.1 678.5 361.1 678.5 362.3"
                            className="st151"
                          />
                          <path d="M678.5 364.2 678.5 366.8" className="st151" />
                          <path d="M678.5 368.7 678.5 371.3" className="st151" />
                          <path d="M678.5 373.3 678.5 375.8" className="st151" />
                          <path d="M678.5 377.8 678.5 380.3" className="st151" />
                          <path d="M678.5 382.3 678.5 384.8" className="st151" />
                          <path d="M678.5 386.7 678.5 389.3" className="st151" />
                          <path d="M678.5 391.2 678.5 393.8" className="st151" />
                          <path d="M678.5 395.7 678.5 397" className="st151" />
                          <path
                            d="M360.7 36.1 360.7 44.6 397.3 44.6 397.3 36.1 360.7 36.1"
                            className="st151"
                          />
                          <path
                            d="M200.7 36.1 200.7 44.6 234.5 44.6 234.5 36.1 200.7 36.1"
                            className="st151"
                          />
                          <path d="M184.5 422 184.5 417.1" className="st151" />
                          <path d="M184.5 414.1 184.5 409.2 191.4 409.2" className="st151" />
                          <path d="M194.4 409.2 200.5 409.2" className="st151" />
                          <path d="M203.6 409.2 209.7 409.2" className="st151" />
                          <path d="M212.8 409.2 218.9 409.2" className="st151" />
                          <path d="M222 409.2 228.1 409.2" className="st151" />
                          <path d="M231.1 409.2 237.3 409.2" className="st151" />
                          <path d="M240.3 409.2 246.4 409.2" className="st151" />
                          <path d="M249.5 409.2 255.6 409.2" className="st151" />
                          <path d="M258.7 409.2 264.8 409.2" className="st151" />
                          <path d="M267.8 409.2 274 409.2" className="st151" />
                          <path d="M277 409.2 283.1 409.2" className="st151" />
                          <path d="M286.2 409.2 292.3 409.2" className="st151" />
                          <path d="M295.4 409.2 301.5 409.2" className="st151" />
                          <path d="M304.6 409.2 311.4 409.2 311.4 414" className="st151" />
                          <path d="M311.4 417.1 311.4 421.8" className="st151" />
                          <path d="M194.1 56.6 193.8 58.8 193 60.9 192.3 61.9" className="st151" />
                          <path
                            d="M190.4 64.1 190.1 64.3 188.2 65.4 186.1 66.1 185.1 66.1"
                            className="st151"
                          />
                          <path
                            d="M182.3 65.9 181.6 65.8 179.5 64.9 177.8 63.6 177.3 63.1"
                            className="st151"
                          />
                          <path
                            d="M175.7 60.7 175.3 59.8 174.8 57.6 174.8 55.4 174.8 55.1"
                            className="st151"
                          />
                          <path
                            d="M175.7 52.3 176.3 51.3 177.8 49.5 179.5 48.1"
                            className="st151"
                          />
                          <path d="M182.3 47.2 183.8 46.9 186.1 47 187.9 47.6" className="st151" />
                          <path d="M190.4 49 191.8 50.3 193 52.2 193.5 53.7" className="st151" />
                          <path d="M194.1 56.6 194.1 56.6" className="st151" />
                          <path
                            d="M202.4 69.6 202.2 71.4 201.4 73.1 200.2 74.4 199.2 75.1"
                            className="st151"
                          />
                          <path
                            d="M196 75.9 195.1 75.9 193.3 75.5 191.8 74.4 190.6 73.1 190.5 72.8"
                            className="st151"
                          />
                          <path
                            d="M189.6 69.6 189.6 69.6 189.8 67.8 190.6 66.1 191.8 64.7 192.8 64"
                            className="st151"
                          />
                          <path
                            d="M196 63.2 196.9 63.2 198.6 63.8 200.2 64.7 201.4 66.1 201.5 66.4"
                            className="st151"
                          />
                          <path d="M202.4 69.6 202.4 69.6" className="st151" />
                          <path d="M518.8 274.7 531.6 274.7" className="st156" />
                          <path d="M518.8 321.6 518.8 315.8" className="st156" />
                          <path d="M518.8 303 518.8 293.3" className="st156" />
                          <path d="M518.8 280.5 518.8 274.7" className="st156" />
                          <path d="M531.6 321.6 518.8 321.6" className="st156" />
                          <path d="M531.6 274.7 531.6 280.5" className="st156" />
                          <path d="M531.6 293.3 531.6 303" className="st156" />
                          <path d="M531.6 315.8 531.6 321.6" className="st156" />
                          <path
                            d="M544.5 560.9 542.3 560.5 540.2 559.6 539.2 558.7"
                            className="st151"
                          />
                          <path
                            d="M537.3 556.7 537.1 556.4 536 554.4 535.6 552.2 535.6 551.3"
                            className="st151"
                          />
                          <path
                            d="M536 548.4 536.2 547.8 537.2 545.8 538.7 544.1 539.2 543.7"
                            className="st151"
                          />
                          <path
                            d="M541.7 542.3 542.6 542 544.8 541.6 547 541.7 547.3 541.8"
                            className="st151"
                          />
                          <path
                            d="M550 542.9 551.1 543.6 552.7 545.1 553.9 547"
                            className="st151"
                          />
                          <path
                            d="M554.7 549.8 554.9 551.4 554.6 553.6 553.9 555.4"
                            className="st151"
                          />
                          <path
                            d="M552.3 557.8 550.9 559.1 548.9 560.2 547.4 560.6"
                            className="st151"
                          />
                          <path d="M544.5 560.9 544.5 560.9" className="st151" />
                          <path
                            d="M530.9 568.3 529.1 567.9 527.5 567 526.2 565.7 525.6 564.7"
                            className="st151"
                          />
                          <path
                            d="M525 561.4 525.1 560.5 525.7 558.8 526.8 557.3 528.3 556.2 528.6 556.2"
                            className="st151"
                          />
                          <path
                            d="M531.8 555.5 531.8 555.5 533.6 555.9 535.2 556.8 536.5 558.1 537.1 559.1"
                            className="st151"
                          />
                          <path
                            d="M537.7 562.3 537.6 563.2 537 565 535.9 566.4 534.4 567.5 534.1 567.6"
                            className="st151"
                          />
                          <path d="M530.9 568.3 530.9 568.3" className="st151" />
                          <path d="M511.2 141.3 516.7 141.3" className="st151" />
                          <path d="M511.2 267.5 511.2 266.1" className="st151" />
                          <path d="M511.2 264.2 511.2 261.6" className="st151" />
                          <path d="M511.2 259.7 511.2 257.1" className="st151" />
                          <path d="M511.2 255.1 511.2 252.6" className="st151" />
                          <path d="M511.2 250.6 511.2 248.1" className="st151" />
                          <path d="M511.2 246.2 511.2 243.6" className="st151" />
                          <path d="M511.2 241.7 511.2 239.1" className="st151" />
                          <path d="M511.2 237.2 511.2 234.6" className="st151" />
                          <path d="M511.2 232.7 511.2 230.1" className="st151" />
                          <path d="M511.2 228.2 511.2 225.6" className="st151" />
                          <path d="M511.2 223.7 511.2 221.1" className="st151" />
                          <path d="M511.2 219.2 511.2 216.6" className="st151" />
                          <path d="M511.2 214.7 511.2 212.1" className="st151" />
                          <path d="M511.2 210.2 511.2 207.6" className="st151" />
                          <path d="M511.2 205.7 511.2 203.1" className="st151" />
                          <path d="M511.2 201.2 511.2 198.6" className="st151" />
                          <path d="M511.2 196.7 511.2 194.2" className="st151" />
                          <path d="M511.2 192.2 511.2 189.7" className="st151" />
                          <path d="M511.2 187.7 511.2 185.1" className="st151" />
                          <path d="M511.2 183.2 511.2 180.6" className="st151" />
                          <path d="M511.2 178.7 511.2 176.1" className="st151" />
                          <path d="M511.2 174.2 511.2 171.7" className="st151" />
                          <path d="M511.2 169.7 511.2 167.2" className="st151" />
                          <path d="M511.2 165.3 511.2 162.7" className="st151" />
                          <path d="M511.2 160.7 511.2 158.2" className="st151" />
                          <path d="M511.2 156.2 511.2 153.6" className="st151" />
                          <path d="M511.2 151.7 511.2 149.2" className="st151" />
                          <path d="M511.2 147.2 511.2 144.7" className="st151" />
                          <path d="M511.2 142.8 511.2 141.3" className="st151" />
                          <path d="M516.7 267.5 511.2 267.5" className="st151" />
                          <path d="M516.7 141.3 516.7 142.8" className="st151" />
                          <path d="M516.7 144.7 516.7 147.2" className="st151" />
                          <path d="M516.7 149.2 516.7 151.7" className="st151" />
                          <path d="M516.7 153.6 516.7 156.2" className="st151" />
                          <path d="M516.7 158.2 516.7 160.7" className="st151" />
                          <path d="M516.7 162.7 516.7 165.3" className="st151" />
                          <path d="M516.7 167.2 516.7 169.7" className="st151" />
                          <path d="M516.7 171.7 516.7 174.2" className="st151" />
                          <path d="M516.7 176.1 516.7 178.7" className="st151" />
                          <path d="M516.7 180.6 516.7 183.2" className="st151" />
                          <path d="M516.7 185.1 516.7 187.7" className="st151" />
                          <path d="M516.7 189.7 516.7 192.2" className="st151" />
                          <path d="M516.7 194.2 516.7 196.7" className="st151" />
                          <path d="M516.7 198.6 516.7 201.2" className="st151" />
                          <path d="M516.7 203.1 516.7 205.7" className="st151" />
                          <path d="M516.7 207.6 516.7 210.2" className="st151" />
                          <path d="M516.7 212.1 516.7 214.7" className="st151" />
                          <path d="M516.7 216.6 516.7 219.2" className="st151" />
                          <path d="M516.7 221.1 516.7 223.7" className="st151" />
                          <path d="M516.7 225.6 516.7 228.2" className="st151" />
                          <path d="M516.7 230.1 516.7 232.7" className="st151" />
                          <path d="M516.7 234.6 516.7 237.2" className="st151" />
                          <path d="M516.7 239.1 516.7 241.7" className="st151" />
                          <path d="M516.7 243.6 516.7 246.2" className="st151" />
                          <path d="M516.7 248.1 516.7 250.6" className="st151" />
                          <path d="M516.7 252.6 516.7 255.1" className="st151" />
                          <path d="M516.7 257.1 516.7 259.7" className="st151" />
                          <path d="M516.7 261.6 516.7 264.2" className="st151" />
                          <path d="M516.7 266.1 516.7 267.5" className="st151" />
                          <path d="M511.2 183.3 516.7 183.3" className="st151" />
                          <path d="M129.3 261.1 129.8 258.7" className="st151" />
                          <path d="M130.3 256.8 130.5 254.3" className="st151" />
                          <path d="M130.7 252.5 130.6 250" className="st151" />
                          <path d="M130.5 248.1 130.1 245.5" className="st151" />
                          <path d="M129.6 243.7 129 241.3" className="st151" />
                          <path d="M128.3 239.6 127.3 237.3" className="st151" />
                          <path d="M126.4 235.6 125.1 233.4" className="st151" />
                          <path d="M125.6 269.1 125.8 268.7 126.8 266.9" className="st151" />
                          <path d="M127.7 265.3 127.8 265 128.6 262.9" className="st151" />
                          <path
                            d="M456.5 240.9 453.5 240.9 450.6 240.5 450.2 240.4"
                            className="st151"
                          />
                          <path
                            d="M447.3 239.3 445.2 238.1 442.9 236.2 442.5 235.6"
                            className="st151"
                          />
                          <path
                            d="M440.7 233.2 439.6 231.3 438.6 228.5 438.5 227.5"
                            className="st151"
                          />
                          <path
                            d="M438.3 224.5 438.3 222.6 439 219.7 439.4 218.6"
                            className="st151"
                          />
                          <path
                            d="M440.9 215.8 441.7 214.5 443.8 212.4 445.1 211.5"
                            className="st151"
                          />
                          <path
                            d="M447.7 210 448.9 209.4 451.7 208.6 453.6 208.5"
                            className="st151"
                          />
                          <path
                            d="M456.6 208.6 457.7 208.8 460.5 209.6 462.4 210.5"
                            className="st151"
                          />
                          <path
                            d="M464.9 212.3 465.5 212.7 467.4 215 468.7 217"
                            className="st151"
                          />
                          <path
                            d="M470 219.9 470.1 220.2 470.6 223.1 470.6 226.1"
                            className="st151"
                          />
                          <path d="M197.1 136.2 211.2 136.2" className="st156" />
                          <path d="M197.1 166.4 197.1 157.7" className="st156" />
                          <path d="M197.1 144.9 197.1 136.2" className="st156" />
                          <path d="M211.2 166.4 197.1 166.4" className="st156" />
                          <path d="M211.2 136.2 211.2 144.9" className="st156" />
                          <path d="M211.2 157.7 211.2 166.4" className="st156" />
                          <path d="M199.7 136.2 199.7 144.9" className="st156" />
                          <path d="M199.7 157.7 199.7 166.4" className="st156" />
                          <path d="M202.9 136.2 202.9 144.9" className="st156" />
                          <path d="M202.9 157.7 202.9 166.4" className="st156" />
                          <path d="M206.1 136.9 206.1 145.2" className="st156" />
                          <path d="M206.1 158.1 206.1 166.4" className="st156" />
                          <path d="M208.7 136.2 208.7 144.9" className="st156" />
                          <path d="M208.7 157.7 208.7 166.4" className="st156" />
                          <path d="M358.2 136.2 372.3 136.2" className="st156" />
                          <path d="M358.2 166.4 358.2 157.7" className="st156" />
                          <path d="M358.2 144.9 358.2 136.2" className="st156" />
                          <path d="M372.3 166.4 358.2 166.4" className="st156" />
                          <path d="M372.3 136.2 372.3 144.9" className="st156" />
                          <path d="M372.3 157.7 372.3 166.4" className="st156" />
                          <path d="M360.8 136.2 360.8 144.9" className="st156" />
                          <path d="M360.8 157.7 360.8 166.4" className="st156" />
                          <path d="M364 136.2 364 144.9" className="st156" />
                          <path d="M364 157.7 364 166.4" className="st156" />
                          <path d="M367.2 136.9 367.2 145.2" className="st156" />
                          <path d="M367.2 158.1 367.2 166.4" className="st156" />
                          <path d="M369.8 136.2 369.8 144.9" className="st156" />
                          <path d="M369.8 157.7 369.8 166.4" className="st156" />
                          <path d="M127.2 174.9 126.6 172.4" className="st151" />
                          <path d="M126.2 170.6 125.4 168.3" className="st151" />
                          <path d="M125.1 192.2 125.6 191.2 126 189.8" className="st151" />
                          <path d="M126.5 188 126.8 187.2 127.1 185.5" className="st151" />
                          <path d="M127.3 183.7 127.5 183.1 127.5 181.2" className="st151" />
                          <path d="M127.6 179.3 127.6 179 127.4 176.8" className="st151" />
                          <path
                            d="M463 191.3 462.7 187.2 461.9 183.1 460.6 179.3 458.8 175.5 456.6 172.1 453.8 169 450.9 166.2 447.5 163.8 443.8 161.9 439.9 160.5 435.9 159.6 431.8 159.2 427.7 159.3 423.7 160 419.7 161.2 416 162.8 412.4 165 409.2 167.6 406.3 170.5 403.9 173.8 401.8 177.4 400.3 181.2 399.3 185.2 398.8 189.3 398.8 193.4 399.3 197.5 400.3 201.4 401.8 205.2 403.9 208.8 406.3 212.2 409.2 215.1 412.4 217.7 416 219.8 419.7 221.5 423.7 222.6 427.7 223.3 431.8 223.4 435.9 223 439.9 222.1 443.8 220.7 447.5 218.8 450.9 216.5 453.8 213.7 456.6 210.5 458.8 207.1 460.6 203.4 461.9 199.5 462.7 195.4 463 191.3"
                            className="st151"
                          />
                          <path
                            d="M450.1 191.3 449.8 188.2 449 185 447.7 182.1 446 179.5 443.9 177.2 441.3 175.2 438.5 173.7 435.6 172.6 432.4 172.1 429.2 172.1 426 172.6 423 173.7 420.3 175.2 417.7 177.2 415.6 179.5 413.9 182.1 412.6 185 411.8 188.2 411.6 191.3 411.8 194.5 412.6 197.6 413.9 200.5 415.6 203.1 417.7 205.5 420.3 207.5 423 209 426 210 429.2 210.5 432.4 210.5 435.6 210 438.5 209 441.3 207.5 443.9 205.5 446 203.1 447.7 200.5 449 197.6 449.8 194.5 450.1 191.3"
                            className="st151"
                          />
                          <path
                            d="M434.3 191.3 434.1 190.1 433.4 188.9 432.4 188.2 431.1 187.8 429.8 187.9 428.7 188.5 427.8 189.5 427.3 190.7 427.3 192 427.8 193.2 428.7 194.2 429.8 194.7 431.1 194.8 432.4 194.5 433.4 193.7 434.1 192.6 434.3 191.3"
                            className="st151"
                          />
                          <path d="M130.9 44.3 140.6 44.3" className="st157" />
                          <path d="M145.3 44.3 155 44.3" className="st157" />
                          <path d="M159.8 44.3 169.5 44.3" className="st157" />
                          <path d="M174.3 44.3 183.9 44.3" className="st157" />
                          <path d="M188.7 44.3 198.4 44.3" className="st157" />
                          <path d="M203.2 44.3 212.8 44.3" className="st157" />
                          <path d="M217.6 44.3 227.3 44.3" className="st157" />
                          <path d="M232.1 44.3 241.7 44.3" className="st157" />
                          <path d="M246.6 44.3 256.5 44.3" className="st157" />
                          <path d="M293.4 44.3 299.2 44.3" className="st157" />
                          <path d="M304 44.3 309.8 44.3" className="st157" />
                          <path d="M346.7 44.3 357.3 44.3" className="st157" />
                          <path d="M362.1 44.3 371.8 44.3" className="st157" />
                          <path d="M376.6 44.3 386.2 44.3" className="st157" />
                          <path d="M391 44.3 400.7 44.3" className="st157" />
                          <path d="M405.5 44.3 416.1 44.3" className="st157" />
                          <path d="M455.3 44.3 467.6 44.3" className="st157" />
                          <path d="M346.7 34.3 344.9 34.3" className="st151" />
                          <path d="M343 34.3 340.4 34.3" className="st151" />
                          <path d="M338.5 34.3 336 34.3" className="st151" />
                          <path d="M334.1 34.3 331.5 34.3" className="st151" />
                          <path d="M329.5 34.3 327 34.3" className="st151" />
                          <path d="M325 34.3 322.4 34.3" className="st151" />
                          <path d="M320.5 34.3 317.9 34.3" className="st151" />
                          <path d="M316 34.3 313.5 34.3" className="st151" />
                          <path d="M311.6 34.3 309.8 34.3 309.8 36.9" className="st151" />
                          <path d="M309.8 38.9 309.8 41.4" className="st151" />
                          <path d="M309.8 43.4 309.8 46 311.6 46" className="st151" />
                          <path d="M313.5 46 316 46" className="st151" />
                          <path d="M317.9 46 320.5 46" className="st151" />
                          <path d="M322.4 46 325 46" className="st151" />
                          <path d="M327 46 329.5 46" className="st151" />
                          <path d="M331.5 46 334.1 46" className="st151" />
                          <path d="M336 46 338.5 46" className="st151" />
                          <path d="M340.4 46 343 46" className="st151" />
                          <path d="M344.9 46 346.7 46 346.7 43.4" className="st151" />
                          <path d="M346.7 41.4 346.7 38.9" className="st151" />
                          <path d="M346.7 36.9 346.7 34.3" className="st151" />
                          <path d="M311.4 35.9 316 35.9" className="st151" />
                          <path d="M317.9 35.9 320.5 35.9" className="st151" />
                          <path d="M322.4 35.9 325 35.9" className="st151" />
                          <path d="M327 35.9 329.5 35.9" className="st151" />
                          <path d="M331.5 35.9 334.1 35.9" className="st151" />
                          <path d="M336 35.9 338.5 35.9" className="st151" />
                          <path d="M340.4 35.9 345.1 35.9 345.1 44.4" className="st151" />
                          <path d="M311.4 44.4 311.4 35.9" className="st151" />
                          <path
                            d="M311.4 36.1 311.4 44.6 345.1 44.6 345.1 36.1 311.4 36.1"
                            className="st151"
                          />
                          <path d="M293.4 34.3 291.6 34.3" className="st151" />
                          <path d="M289.7 34.3 287.2 34.3" className="st151" />
                          <path d="M285.2 34.3 282.7 34.3" className="st151" />
                          <path d="M280.7 34.3 278.1 34.3" className="st151" />
                          <path d="M276.2 34.3 273.6 34.3" className="st151" />
                          <path d="M271.7 34.3 269.1 34.3" className="st151" />
                          <path d="M267.2 34.3 264.7 34.3" className="st151" />
                          <path d="M262.7 34.3 260.2 34.3" className="st151" />
                          <path d="M258.3 34.3 256.5 34.3 256.5 36.9" className="st151" />
                          <path d="M256.5 38.9 256.5 41.4" className="st151" />
                          <path d="M256.5 43.4 256.5 46 258.3 46" className="st151" />
                          <path d="M260.2 46 262.7 46" className="st151" />
                          <path d="M264.7 46 267.2 46" className="st151" />
                          <path d="M269.1 46 271.7 46" className="st151" />
                          <path d="M273.6 46 276.2 46" className="st151" />
                          <path d="M278.1 46 280.7 46" className="st151" />
                          <path d="M282.7 46 285.2 46" className="st151" />
                          <path d="M287.2 46 289.7 46" className="st151" />
                          <path d="M291.6 46 293.4 46 293.4 43.4" className="st151" />
                          <path d="M293.4 41.4 293.4 38.9" className="st151" />
                          <path d="M293.4 36.9 293.4 34.3" className="st151" />
                          <path d="M258.1 35.9 262.7 35.9" className="st151" />
                          <path d="M264.7 35.9 267.2 35.9" className="st151" />
                          <path d="M269.1 35.9 271.7 35.9" className="st151" />
                          <path d="M273.6 35.9 276.2 35.9" className="st151" />
                          <path d="M278.1 35.9 280.7 35.9" className="st151" />
                          <path d="M282.7 35.9 285.2 35.9" className="st151" />
                          <path d="M287.2 35.9 291.8 35.9 291.8 44.4" className="st151" />
                          <path d="M258.1 44.4 258.1 35.9" className="st151" />
                          <path
                            d="M258.1 36.1 258.1 44.6 291.8 44.6 291.8 36.1 258.1 36.1"
                            className="st151"
                          />
                          <path d="M506.8 34.3 503.9 34.3" className="st151" />
                          <path d="M502 34.3 499.5 34.3" className="st151" />
                          <path d="M497.5 34.3 495 34.3" className="st151" />
                          <path d="M493 34.3 490.5 34.3" className="st151" />
                          <path d="M488.5 34.3 485.9 34.3" className="st151" />
                          <path d="M484 34.3 481.4 34.3" className="st151" />
                          <path d="M479.5 34.3 477 34.3" className="st151" />
                          <path d="M475.1 34.3 472.5 34.3" className="st151" />
                          <path d="M470.6 34.3 467.6 34.3 467.6 36.9" className="st151" />
                          <path d="M467.6 38.9 467.6 41.4" className="st151" />
                          <path d="M467.6 43.4 467.6 46 470.6 46" className="st151" />
                          <path d="M472.5 46 475.1 46" className="st151" />
                          <path d="M477 46 479.5 46" className="st151" />
                          <path d="M481.4 46 484 46" className="st151" />
                          <path d="M485.9 46 488.5 46" className="st151" />
                          <path d="M490.5 46 493 46" className="st151" />
                          <path d="M495 46 497.5 46" className="st151" />
                          <path d="M499.5 46 502 46" className="st151" />
                          <path d="M506.8 41.4 506.8 38.9" className="st151" />
                          <path d="M506.8 36.9 506.8 34.3" className="st151" />
                          <path d="M469.3 35.9 470.6 35.9" className="st151" />
                          <path d="M472.5 35.9 475.1 35.9" className="st151" />
                          <path d="M477 35.9 479.5 35.9" className="st151" />
                          <path d="M481.4 35.9 484 35.9" className="st151" />
                          <path d="M485.9 35.9 488.5 35.9" className="st151" />
                          <path d="M490.5 35.9 493 35.9" className="st151" />
                          <path d="M495 35.9 497.5 35.9" className="st151" />
                          <path d="M499.5 35.9 502 35.9" className="st151" />
                          <path d="M503.9 35.9 505.2 35.9 505.2 44.4" className="st151" />
                          <path d="M469.3 44.4 469.3 35.9" className="st151" />
                          <path
                            d="M469.3 36.1 469.3 44.6 505.2 44.6 505.2 36.1 469.3 36.1"
                            className="st151"
                          />
                          <path d="M455.3 34.3 452.4 34.3" className="st151" />
                          <path d="M450.4 34.3 447.9 34.3" className="st151" />
                          <path d="M446 34.3 443.4 34.3" className="st151" />
                          <path d="M441.5 34.3 438.9 34.3" className="st151" />
                          <path d="M437 34.3 434.4 34.3" className="st151" />
                          <path d="M432.5 34.3 429.9 34.3" className="st151" />
                          <path d="M428 34.3 425.4 34.3" className="st151" />
                          <path d="M423.5 34.3 420.9 34.3" className="st151" />
                          <path d="M419 34.3 416.1 34.3 416.1 36.9" className="st151" />
                          <path d="M416.1 38.9 416.1 41.4" className="st151" />
                          <path d="M416.1 43.4 416.1 46 419 46" className="st151" />
                          <path d="M420.9 46 423.5 46" className="st151" />
                          <path d="M425.4 46 428 46" className="st151" />
                          <path d="M429.9 46 432.5 46" className="st151" />
                          <path d="M434.4 46 437 46" className="st151" />
                          <path d="M438.9 46 441.5 46" className="st151" />
                          <path d="M443.4 46 446 46" className="st151" />
                          <path d="M447.9 46 450.4 46" className="st151" />
                          <path d="M452.4 46 455.3 46 455.3 43.4" className="st151" />
                          <path d="M455.3 41.4 455.3 38.9" className="st151" />
                          <path d="M455.3 36.9 455.3 34.3" className="st151" />
                          <path d="M417.7 35.9 419 35.9" className="st151" />
                          <path d="M420.9 35.9 423.5 35.9" className="st151" />
                          <path d="M425.4 35.9 428 35.9" className="st151" />
                          <path d="M429.9 35.9 432.5 35.9" className="st151" />
                          <path d="M434.4 35.9 437 35.9" className="st151" />
                          <path d="M438.9 35.9 441.5 35.9" className="st151" />
                          <path d="M443.4 35.9 446 35.9" className="st151" />
                          <path d="M447.9 35.9 450.4 35.9" className="st151" />
                          <path d="M452.4 35.9 453.7 35.9 453.7 44.4" className="st151" />
                          <path d="M417.7 36.1 417.7 35.9" className="st151" />
                          <path
                            d="M417.1 36.1 417.1 44.6 453.7 44.6 453.7 36.1 417.1 36.1"
                            className="st151"
                          />
                          <path d="M560.8 34.3 557.9 34.3" className="st151" />
                          <path d="M556 34.3 553.4 34.3" className="st151" />
                          <path d="M551.5 34.3 548.9 34.3" className="st151" />
                          <path d="M547 34.3 544.4 34.3" className="st151" />
                          <path d="M542.5 34.3 539.9 34.3" className="st151" />
                          <path d="M538 34.3 535.4 34.3" className="st151" />
                          <path d="M533.5 34.3 530.9 34.3" className="st151" />
                          <path d="M529 34.3 526.4 34.3" className="st151" />
                          <path d="M524.5 34.3 521.6 34.3 521.6 36.9" className="st151" />
                          <path d="M521.6 38.9 521.6 41.4" className="st151" />
                          <path d="M521.6 43.4 521.6 46 524.5 46" className="st151" />
                          <path d="M526.4 46 529 46" className="st151" />
                          <path d="M530.9 46 533.5 46" className="st151" />
                          <path d="M535.4 46 538 46" className="st151" />
                          <path d="M539.9 46 542.5 46" className="st151" />
                          <path d="M544.4 46 547 46" className="st151" />
                          <path d="M548.9 46 551.5 46" className="st151" />
                          <path d="M553.4 46 556 46" className="st151" />
                          <path d="M557.9 46 560.8 46 560.8 43.4" className="st151" />
                          <path d="M560.8 41.4 560.8 38.9" className="st151" />
                          <path d="M560.8 36.9 560.8 34.3" className="st151" />
                          <path d="M523.2 35.9 524.5 35.9" className="st151" />
                          <path d="M526.4 35.9 529 35.9" className="st151" />
                          <path d="M530.9 35.9 533.5 35.9" className="st151" />
                          <path d="M535.4 35.9 538 35.9" className="st151" />
                          <path d="M539.9 35.9 542.5 35.9" className="st151" />
                          <path d="M544.4 35.9 547 35.9" className="st151" />
                          <path d="M548.9 35.9 551.5 35.9" className="st151" />
                          <path d="M553.4 35.9 556 35.9" className="st151" />
                          <path d="M557.9 35.9 559.2 35.9 559.2 44.4" className="st151" />
                          <path d="M523.2 44.4 523.2 35.9" className="st151" />
                          <path
                            d="M523.2 36.1 523.2 44.6 559.2 44.6 559.2 36.1 523.2 36.1"
                            className="st151"
                          />
                          <path d="M619.2 34.3 616.4 34.3" className="st151" />
                          <path d="M614.4 34.3 611.8 34.3" className="st151" />
                          <path d="M609.9 34.3 607.3 34.3" className="st151" />
                          <path d="M605.4 34.3 602.9 34.3" className="st151" />
                          <path d="M601 34.3 598.4 34.3" className="st151" />
                          <path d="M596.5 34.3 593.9 34.3" className="st151" />
                          <path d="M591.9 34.3 589.4 34.3" className="st151" />
                          <path d="M587.4 34.3 584.9 34.3" className="st151" />
                          <path d="M582.9 34.3 580.1 34.3" className="st151" />
                          <path d="M580.1 34.3 580.1 36.9" className="st151" />
                          <path d="M580.1 38.9 580.1 41.4" className="st151" />
                          <path d="M580.1 43.4 580.1 46 582.9 46" className="st151" />
                          <path d="M584.9 46 587.4 46" className="st151" />
                          <path d="M589.4 46 591.9 46" className="st151" />
                          <path d="M593.9 46 596.5 46" className="st151" />
                          <path d="M598.4 46 601 46" className="st151" />
                          <path d="M602.9 46 605.4 46" className="st151" />
                          <path d="M607.3 46 609.9 46" className="st151" />
                          <path d="M611.8 46 614.4 46" className="st151" />
                          <path d="M616.4 46 619.2 46 619.2 43.4" className="st151" />
                          <path d="M619.2 41.4 619.2 38.9" className="st151" />
                          <path d="M619.2 36.9 619.2 34.3" className="st151" />
                          <path d="M581.6 35.9 582.9 35.9" className="st151" />
                          <path d="M584.9 35.9 587.4 35.9" className="st151" />
                          <path d="M589.4 35.9 591.9 35.9" className="st151" />
                          <path d="M593.9 35.9 596.5 35.9" className="st151" />
                          <path d="M598.4 35.9 601 35.9" className="st151" />
                          <path d="M602.9 35.9 605.4 35.9" className="st151" />
                          <path d="M607.3 35.9 609.9 35.9" className="st151" />
                          <path d="M611.8 35.9 614.4 35.9" className="st151" />
                          <path d="M616.4 35.9 617.6 35.9 617.6 44.4" className="st151" />
                          <path d="M581.6 44.4 581.6 35.9" className="st151" />
                          <path
                            d="M581.6 36.1 581.6 44.6 617.6 44.6 617.6 36.1 581.6 36.1"
                            className="st151"
                          />
                          <path d="M668.7 34.3 665.8 34.3" className="st151" />
                          <path d="M663.9 34.3 661.3 34.3" className="st151" />
                          <path d="M659.4 34.3 656.8 34.3" className="st151" />
                          <path d="M654.9 34.3 652.4 34.3" className="st151" />
                          <path d="M650.4 34.3 647.9 34.3" className="st151" />
                          <path d="M645.9 34.3 643.3 34.3" className="st151" />
                          <path d="M641.4 34.3 638.8 34.3" className="st151" />
                          <path d="M636.9 34.3 634.3 34.3" className="st151" />
                          <path d="M632.4 34.3 629.5 34.3 629.5 36.9" className="st151" />
                          <path d="M629.5 38.9 629.5 41.4" className="st151" />
                          <path d="M629.5 43.4 629.5 46 632.4 46" className="st151" />
                          <path d="M634.3 46 636.9 46" className="st151" />
                          <path d="M638.8 46 641.4 46" className="st151" />
                          <path d="M643.3 46 645.9 46" className="st151" />
                          <path d="M647.9 46 650.4 46" className="st151" />
                          <path d="M652.4 46 654.9 46" className="st151" />
                          <path d="M656.8 46 659.4 46" className="st151" />
                          <path d="M661.3 46 663.9 46" className="st151" />
                          <path d="M665.8 46 668.7 46 668.7 43.4" className="st151" />
                          <path d="M668.7 41.4 668.7 38.9" className="st151" />
                          <path d="M668.7 36.9 668.7 34.3" className="st151" />
                          <path d="M631.1 35.9 632.4 35.9" className="st151" />
                          <path d="M634.3 35.9 636.9 35.9" className="st151" />
                          <path d="M638.8 35.9 641.4 35.9" className="st151" />
                          <path d="M643.3 35.9 645.9 35.9" className="st151" />
                          <path d="M647.9 35.9 650.4 35.9" className="st151" />
                          <path d="M652.4 35.9 654.9 35.9" className="st151" />
                          <path d="M656.8 35.9 659.4 35.9" className="st151" />
                          <path d="M661.3 35.9 663.9 35.9" className="st151" />
                          <path d="M665.8 35.9 667.1 35.9 667.1 44.4" className="st151" />
                          <path d="M631.1 44.4 631.1 35.9" className="st151" />
                          <path
                            d="M631.1 36.1 631.1 44.6 667.1 44.6 667.1 36.1 631.1 36.1"
                            className="st151"
                          />
                          <path d="M680.1 93.5 677.4 93.5" className="st151" />
                          <path d="M675.5 93.5 672.9 93.5" className="st151" />
                          <path d="M671 93.5 668.4 93.5 668.4 96.4" className="st151" />
                          <path d="M668.4 98.3 668.4 100.9" className="st151" />
                          <path d="M668.4 102.8 668.4 105.4" className="st151" />
                          <path d="M668.4 107.3 668.4 109.9" className="st151" />
                          <path d="M668.4 111.8 668.4 114.3" className="st151" />
                          <path d="M668.4 116.3 668.4 118.8" className="st151" />
                          <path d="M668.4 120.8 668.4 123.4" className="st151" />
                          <path d="M668.4 125.3 668.4 127.9" className="st151" />
                          <path d="M668.4 129.8 668.4 132.7 671 132.7" className="st151" />
                          <path d="M672.9 132.7 675.5 132.7" className="st151" />
                          <path d="M677.4 132.7 680.1 132.7 680.1 129.8" className="st151" />
                          <path d="M680.1 127.9 680.1 125.3" className="st151" />
                          <path d="M680.1 123.4 680.1 120.8" className="st151" />
                          <path d="M680.1 118.8 680.1 116.3" className="st151" />
                          <path d="M680.1 114.3 680.1 111.8" className="st151" />
                          <path d="M680.1 109.9 680.1 107.3" className="st151" />
                          <path d="M680.1 105.4 680.1 102.8" className="st151" />
                          <path d="M680.1 100.9 680.1 98.3" className="st151" />
                          <path d="M680.1 96.4 680.1 93.5" className="st151" />
                          <path d="M678.5 131.1 670 131.1 670 129.8" className="st151" />
                          <path d="M670 127.9 670 125.3" className="st151" />
                          <path d="M670 123.4 670 120.8" className="st151" />
                          <path d="M670 118.8 670 116.3" className="st151" />
                          <path d="M670 114.3 670 111.8" className="st151" />
                          <path d="M670 109.9 670 107.3" className="st151" />
                          <path d="M670 105.4 670 102.8" className="st151" />
                          <path d="M670 100.9 670 98.3" className="st151" />
                          <path d="M670 96.4 670 95.1 678.5 95.1 678.5 96.4" className="st151" />
                          <path d="M678.5 98.3 678.5 100.9" className="st151" />
                          <path d="M678.5 102.8 678.5 105.4" className="st151" />
                          <path d="M678.5 107.3 678.5 109.9" className="st151" />
                          <path d="M678.5 111.8 678.5 114.3" className="st151" />
                          <path d="M678.5 116.3 678.5 118.8" className="st151" />
                          <path d="M678.5 120.8 678.5 123.4" className="st151" />
                          <path d="M678.5 125.3 678.5 127.9" className="st151" />
                          <path d="M678.5 129.8 678.5 131.1" className="st151" />
                          <path d="M680.1 310.6 677.4 310.6" className="st151" />
                          <path d="M675.5 310.6 672.9 310.6" className="st151" />
                          <path d="M671 310.6 668.4 310.6 668.4 313.5" className="st151" />
                          <path d="M668.4 315.4 668.4 318" className="st151" />
                          <path d="M668.4 319.9 668.4 322.5" className="st151" />
                          <path d="M668.4 324.4 668.4 327" className="st151" />
                          <path d="M668.4 329 668.4 331.5" className="st151" />
                          <path d="M668.4 333.5 668.4 336" className="st151" />
                          <path d="M668.4 337.9 668.4 340.5" className="st151" />
                          <path d="M668.4 342.4 668.4 345" className="st151" />
                          <path d="M668.4 346.9 668.4 349.8 671 349.8" className="st151" />
                          <path d="M672.9 349.8 675.5 349.8" className="st151" />
                          <path d="M677.4 349.8 680.1 349.8 680.1 346.9" className="st151" />
                          <path d="M680.1 345 680.1 342.4" className="st151" />
                          <path d="M680.1 340.5 680.1 337.9" className="st151" />
                          <path d="M680.1 336 680.1 333.5" className="st151" />
                          <path d="M680.1 331.5 680.1 329" className="st151" />
                          <path d="M680.1 327 680.1 324.4" className="st151" />
                          <path d="M680.1 322.5 680.1 319.9" className="st151" />
                          <path d="M680.1 318 680.1 315.4" className="st151" />
                          <path d="M680.1 313.5 680.1 310.6" className="st151" />
                          <path d="M678.5 348.2 670 348.2 670 346.9" className="st151" />
                          <path d="M670 345 670 342.4" className="st151" />
                          <path d="M670 340.5 670 337.9" className="st151" />
                          <path d="M670 336 670 333.5" className="st151" />
                          <path d="M670 331.5 670 329" className="st151" />
                          <path d="M670 327 670 324.4" className="st151" />
                          <path d="M670 322.5 670 319.9" className="st151" />
                          <path d="M670 318 670 315.4" className="st151" />
                          <path
                            d="M670 313.5 670 312.2 678.5 312.2 678.5 313.5"
                            className="st151"
                          />
                          <path d="M678.5 315.4 678.5 318" className="st151" />
                          <path d="M678.5 319.9 678.5 322.5" className="st151" />
                          <path d="M678.5 324.4 678.5 327" className="st151" />
                          <path d="M678.5 329 678.5 331.5" className="st151" />
                          <path d="M678.5 333.5 678.5 336" className="st151" />
                          <path d="M678.5 337.9 678.5 340.5" className="st151" />
                          <path d="M678.5 342.4 678.5 345" className="st151" />
                          <path d="M678.5 346.9 678.5 348.2" className="st151" />
                          <path d="M680.1 270.8 677.4 270.8" className="st151" />
                          <path d="M675.5 270.8 672.9 270.8" className="st151" />
                          <path d="M671 270.8 668.4 270.8 668.4 273.7" className="st151" />
                          <path d="M668.4 275.6 668.4 278.2" className="st151" />
                          <path d="M668.4 280.1 668.4 282.7" className="st151" />
                          <path d="M668.4 284.6 668.4 287.2" className="st151" />
                          <path d="M668.4 289.1 668.4 291.7" className="st151" />
                          <path d="M668.4 293.6 668.4 296.2" className="st151" />
                          <path d="M668.4 298.1 668.4 300.7" className="st151" />
                          <path d="M668.4 302.6 668.4 305.2" className="st151" />
                          <path d="M668.4 307.1 668.4 310 671 310" className="st151" />
                          <path d="M672.9 310 675.5 310" className="st151" />
                          <path d="M677.4 310 680.1 310 680.1 307.1" className="st151" />
                          <path d="M680.1 305.2 680.1 302.6" className="st151" />
                          <path d="M680.1 300.7 680.1 298.1" className="st151" />
                          <path d="M680.1 296.2 680.1 293.6" className="st151" />
                          <path d="M680.1 291.7 680.1 289.1" className="st151" />
                          <path d="M680.1 287.2 680.1 284.6" className="st151" />
                          <path d="M680.1 282.7 680.1 280.1" className="st151" />
                          <path d="M680.1 278.2 680.1 275.6" className="st151" />
                          <path d="M680.1 273.7 680.1 270.8" className="st151" />
                          <path d="M678.5 308.4 670 308.4 670 307.1" className="st151" />
                          <path d="M670 305.2 670 302.6" className="st151" />
                          <path d="M670 300.7 670 298.1" className="st151" />
                          <path d="M670 296.2 670 293.6" className="st151" />
                          <path d="M670 291.7 670 289.1" className="st151" />
                          <path d="M670 287.2 670 284.6" className="st151" />
                          <path d="M670 282.7 670 280.1" className="st151" />
                          <path d="M670 278.2 670 275.6" className="st151" />
                          <path
                            d="M670 273.7 670 272.4 678.5 272.4 678.5 273.7"
                            className="st151"
                          />
                          <path d="M678.5 275.6 678.5 278.2" className="st151" />
                          <path d="M678.5 280.1 678.5 282.7" className="st151" />
                          <path d="M678.5 284.6 678.5 287.2" className="st151" />
                          <path d="M678.5 289.1 678.5 291.7" className="st151" />
                          <path d="M678.5 293.6 678.5 296.2" className="st151" />
                          <path d="M678.5 298.1 678.5 300.7" className="st151" />
                          <path d="M678.5 302.6 678.5 305.2" className="st151" />
                          <path d="M678.5 307.1 678.5 308.4" className="st151" />
                          <path d="M680.1 229.6 677.4 229.6" className="st151" />
                          <path d="M675.5 229.6 672.9 229.6" className="st151" />
                          <path d="M671 229.6 668.4 229.6 668.4 232.5" className="st151" />
                          <path d="M668.4 234.4 668.4 237" className="st151" />
                          <path d="M668.4 238.9 668.4 241.5" className="st151" />
                          <path d="M668.4 243.4 668.4 246" className="st151" />
                          <path d="M668.4 247.9 668.4 250.4" className="st151" />
                          <path d="M668.4 252.4 668.4 255" className="st151" />
                          <path d="M668.4 256.9 668.4 259.5" className="st151" />
                          <path d="M668.4 261.4 668.4 264" className="st151" />
                          <path d="M668.4 265.9 668.4 268.8 671 268.8" className="st151" />
                          <path d="M672.9 268.8 675.5 268.8" className="st151" />
                          <path d="M677.4 268.8 680.1 268.8 680.1 265.9" className="st151" />
                          <path d="M680.1 264 680.1 261.4" className="st151" />
                          <path d="M680.1 259.5 680.1 256.9" className="st151" />
                          <path d="M680.1 255 680.1 252.4" className="st151" />
                          <path d="M680.1 250.4 680.1 247.9" className="st151" />
                          <path d="M680.1 246 680.1 243.4" className="st151" />
                          <path d="M680.1 241.5 680.1 238.9" className="st151" />
                          <path d="M680.1 237 680.1 234.4" className="st151" />
                          <path d="M680.1 232.5 680.1 229.6" className="st151" />
                          <path d="M678.5 267.2 670 267.2 670 265.9" className="st151" />
                          <path d="M670 264 670 261.4" className="st151" />
                          <path d="M670 259.5 670 256.9" className="st151" />
                          <path d="M670 255 670 252.4" className="st151" />
                          <path d="M670 250.4 670 247.9" className="st151" />
                          <path d="M670 246 670 243.4" className="st151" />
                          <path d="M670 241.5 670 238.9" className="st151" />
                          <path d="M670 237 670 234.4" className="st151" />
                          <path
                            d="M670 232.5 670 231.2 678.5 231.2 678.5 232.5"
                            className="st151"
                          />
                          <path d="M678.5 234.4 678.5 237" className="st151" />
                          <path d="M678.5 238.9 678.5 241.5" className="st151" />
                          <path d="M678.5 243.4 678.5 246" className="st151" />
                          <path d="M678.5 247.9 678.5 250.4" className="st151" />
                          <path d="M678.5 252.4 678.5 255" className="st151" />
                          <path d="M678.5 256.9 678.5 259.5" className="st151" />
                          <path d="M678.5 261.4 678.5 264" className="st151" />
                          <path d="M678.5 265.9 678.5 267.2" className="st151" />
                          <path d="M680.1 185.2 677.4 185.2" className="st151" />
                          <path d="M675.5 185.2 672.9 185.2" className="st151" />
                          <path d="M671 185.2 668.4 185.2 668.4 188.2" className="st151" />
                          <path d="M668.4 190.1 668.4 192.7" className="st151" />
                          <path d="M668.4 194.6 668.4 197.1" className="st151" />
                          <path d="M668.4 199.1 668.4 201.6" className="st151" />
                          <path d="M668.4 203.6 668.4 206.1" className="st151" />
                          <path d="M668.4 208.1 668.4 210.7" className="st151" />
                          <path d="M668.4 212.6 668.4 215.2" className="st151" />
                          <path d="M668.4 217.1 668.4 219.6" className="st151" />
                          <path d="M668.4 221.6 668.4 224.5 671 224.5" className="st151" />
                          <path d="M672.9 224.5 675.5 224.5" className="st151" />
                          <path d="M677.4 224.5 680.1 224.5 680.1 221.6" className="st151" />
                          <path d="M680.1 219.6 680.1 217.1" className="st151" />
                          <path d="M680.1 215.2 680.1 212.6" className="st151" />
                          <path d="M680.1 210.7 680.1 208.1" className="st151" />
                          <path d="M680.1 206.1 680.1 203.6" className="st151" />
                          <path d="M680.1 201.6 680.1 199.1" className="st151" />
                          <path d="M680.1 197.1 680.1 194.6" className="st151" />
                          <path d="M680.1 192.7 680.1 190.1" className="st151" />
                          <path d="M680.1 188.2 680.1 185.2" className="st151" />
                          <path d="M678.5 222.8 670 222.8 670 221.6" className="st151" />
                          <path d="M670 219.6 670 217.1" className="st151" />
                          <path d="M670 215.2 670 212.6" className="st151" />
                          <path d="M670 210.7 670 208.1" className="st151" />
                          <path d="M670 206.1 670 203.6" className="st151" />
                          <path d="M670 201.6 670 199" className="st151" />
                          <path d="M670 197.1 670 194.6" className="st151" />
                          <path d="M670 192.7 670 190.1" className="st151" />
                          <path
                            d="M670 188.2 670 186.9 678.5 186.9 678.5 188.2"
                            className="st151"
                          />
                          <path d="M678.5 190.1 678.5 192.7" className="st151" />
                          <path d="M678.5 194.6 678.5 197.1" className="st151" />
                          <path d="M678.5 199 678.5 201.6" className="st151" />
                          <path d="M678.5 203.6 678.5 206.1" className="st151" />
                          <path d="M678.5 208.1 678.5 210.7" className="st151" />
                          <path d="M678.5 212.6 678.5 215.2" className="st151" />
                          <path d="M678.5 217.1 678.5 219.6" className="st151" />
                          <path d="M678.5 221.6 678.5 222.8" className="st151" />
                          <path d="M680.1 527.7 677.4 527.7" className="st151" />
                          <path d="M675.5 527.7 672.9 527.7" className="st151" />
                          <path d="M671 527.7 668.4 527.7 668.4 530.7" className="st151" />
                          <path d="M668.4 532.6 668.4 535.2" className="st151" />
                          <path d="M668.4 537.1 668.4 539.6" className="st151" />
                          <path d="M668.4 541.5 668.4 544.1" className="st151" />
                          <path d="M668.4 546 668.4 548.6" className="st151" />
                          <path d="M668.4 550.5 668.4 553.1" className="st151" />
                          <path d="M668.4 555.1 668.4 557.6" className="st151" />
                          <path d="M668.4 559.6 668.4 562.1" className="st151" />
                          <path d="M668.4 564 668.4 566.9 671 566.9" className="st151" />
                          <path d="M672.9 566.9 675.5 566.9" className="st151" />
                          <path d="M677.4 566.9 680.1 566.9 680.1 564" className="st151" />
                          <path d="M680.1 562.1 680.1 559.6" className="st151" />
                          <path d="M680.1 557.6 680.1 555.1" className="st151" />
                          <path d="M680.1 553.1 680.1 550.5" className="st151" />
                          <path d="M680.1 548.6 680.1 546" className="st151" />
                          <path d="M680.1 544.1 680.1 541.5" className="st151" />
                          <path d="M680.1 539.6 680.1 537.1" className="st151" />
                          <path d="M680.1 535.2 680.1 532.6" className="st151" />
                          <path d="M680.1 530.7 680.1 527.7" className="st151" />
                          <path d="M678.5 565.3 670 565.3 670 564" className="st151" />
                          <path d="M670 562.1 670 559.6" className="st151" />
                          <path d="M670 557.6 670 555.1" className="st151" />
                          <path d="M670 553.1 670 550.5" className="st151" />
                          <path d="M670 548.6 670 546" className="st151" />
                          <path d="M670 544.1 670 541.5" className="st151" />
                          <path d="M670 539.6 670 537.1" className="st151" />
                          <path d="M670 535.2 670 532.6" className="st151" />
                          <path
                            d="M670 530.7 670 529.4 678.5 529.4 678.5 530.7"
                            className="st151"
                          />
                          <path d="M678.5 532.6 678.5 535.2" className="st151" />
                          <path d="M678.5 537.1 678.5 539.6" className="st151" />
                          <path d="M678.5 541.5 678.5 544.1" className="st151" />
                          <path d="M678.5 546 678.5 548.6" className="st151" />
                          <path d="M678.5 550.5 678.5 553.1" className="st151" />
                          <path d="M678.5 555.1 678.5 557.6" className="st151" />
                          <path d="M678.5 559.6 678.5 562.1" className="st151" />
                          <path d="M678.5 564 678.5 565.3" className="st151" />
                          <path d="M680.1 401.2 677.4 401.2" className="st151" />
                          <path d="M675.5 401.2 672.9 401.2" className="st151" />
                          <path d="M671 401.2 668.4 401.2 668.4 404.1" className="st151" />
                          <path d="M668.4 406 668.4 408.6" className="st151" />
                          <path d="M668.4 410.5 668.4 413.1" className="st151" />
                          <path d="M668.4 415 668.4 417.6" className="st151" />
                          <path d="M668.4 419.5 668.4 422.1" className="st151" />
                          <path d="M668.4 424 668.4 426.6" className="st151" />
                          <path d="M668.4 428.5 668.4 431.1" className="st151" />
                          <path d="M668.4 433 668.4 435.6" className="st151" />
                          <path d="M668.4 437.5 668.4 440.4 671 440.4" className="st151" />
                          <path d="M672.9 440.4 675.5 440.4" className="st151" />
                          <path d="M677.4 440.4 680.1 440.4 680.1 437.5" className="st151" />
                          <path d="M680.1 435.6 680.1 433" className="st151" />
                          <path d="M680.1 431.1 680.1 428.5" className="st151" />
                          <path d="M680.1 426.6 680.1 424" className="st151" />
                          <path d="M680.1 422.1 680.1 419.5" className="st151" />
                          <path d="M680.1 417.6 680.1 415" className="st151" />
                          <path d="M680.1 413.1 680.1 410.5" className="st151" />
                          <path d="M680.1 408.6 680.1 406" className="st151" />
                          <path d="M680.1 404.1 680.1 401.2" className="st151" />
                          <path d="M678.5 438.8 670 438.8 670 437.5" className="st151" />
                          <path d="M670 435.6 670 433" className="st151" />
                          <path d="M670 431.1 670 428.5" className="st151" />
                          <path d="M670 426.6 670 424" className="st151" />
                          <path d="M670 422.1 670 419.5" className="st151" />
                          <path d="M670 417.6 670 415" className="st151" />
                          <path d="M670 413.1 670 410.5" className="st151" />
                          <path d="M670 408.6 670 406" className="st151" />
                          <path
                            d="M670 404.1 670 402.8 678.5 402.8 678.5 404.1"
                            className="st151"
                          />
                          <path d="M678.5 406 678.5 408.6" className="st151" />
                          <path d="M678.5 410.5 678.5 413.1" className="st151" />
                          <path d="M678.5 415 678.5 417.6" className="st151" />
                          <path d="M678.5 419.5 678.5 422.1" className="st151" />
                          <path d="M678.5 424 678.5 426.6" className="st151" />
                          <path d="M678.5 428.5 678.5 431.1" className="st151" />
                          <path d="M678.5 433 678.5 435.6" className="st151" />
                          <path d="M678.5 437.5 678.5 438.8" className="st151" />
                          <path d="M680.1 443 677.4 443" className="st151" />
                          <path d="M675.5 443 672.9 443" className="st151" />
                          <path d="M671 443 668.4 443 668.4 445.8" className="st151" />
                          <path d="M668.4 447.8 668.4 450.3" className="st151" />
                          <path d="M668.4 452.3 668.4 454.9" className="st151" />
                          <path d="M668.4 456.8 668.4 459.4" className="st151" />
                          <path d="M668.4 461.3 668.4 463.8" className="st151" />
                          <path d="M668.4 465.7 668.4 468.3" className="st151" />
                          <path d="M668.4 470.2 668.4 472.8" className="st151" />
                          <path d="M668.4 474.7 668.4 477.3" className="st151" />
                          <path d="M668.4 479.3 668.4 482.1 671 482.1" className="st151" />
                          <path d="M672.9 482.1 675.5 482.1" className="st151" />
                          <path d="M677.4 482.1 680.1 482.1 680.1 479.3" className="st151" />
                          <path d="M680.1 477.3 680.1 474.7" className="st151" />
                          <path d="M680.1 472.8 680.1 470.2" className="st151" />
                          <path d="M680.1 468.3 680.1 465.7" className="st151" />
                          <path d="M680.1 463.8 680.1 461.3" className="st151" />
                          <path d="M680.1 459.4 680.1 456.8" className="st151" />
                          <path d="M680.1 454.9 680.1 452.3" className="st151" />
                          <path d="M680.1 450.3 680.1 447.8" className="st151" />
                          <path d="M680.1 445.8 680.1 443" className="st151" />
                          <path d="M678.5 480.6 670 480.6 670 479.3" className="st151" />
                          <path d="M670 477.3 670 474.7" className="st151" />
                          <path d="M670 472.8 670 470.2" className="st151" />
                          <path d="M670 468.3 670 465.7" className="st151" />
                          <path d="M670 463.8 670 461.3" className="st151" />
                          <path d="M670 459.4 670 456.8" className="st151" />
                          <path d="M670 454.9 670 452.3" className="st151" />
                          <path d="M670 450.3 670 447.8" className="st151" />
                          <path
                            d="M670 445.8 670 444.5 678.5 444.5 678.5 445.8"
                            className="st151"
                          />
                          <path d="M678.5 447.8 678.5 450.3" className="st151" />
                          <path d="M678.5 452.3 678.5 454.9" className="st151" />
                          <path d="M678.5 456.8 678.5 459.4" className="st151" />
                          <path d="M678.5 461.3 678.5 463.8" className="st151" />
                          <path d="M678.5 465.7 678.5 468.3" className="st151" />
                          <path d="M678.5 470.2 678.5 472.8" className="st151" />
                          <path d="M678.5 474.7 678.5 477.3" className="st151" />
                          <path d="M678.5 479.3 678.5 480.6" className="st151" />
                          <path d="M680.1 485.3 677.4 485.3" className="st151" />
                          <path d="M675.5 485.3 672.9 485.3" className="st151" />
                          <path d="M671 485.3 668.4 485.3 668.4 488.2" className="st151" />
                          <path d="M668.4 490.1 668.4 492.7" className="st151" />
                          <path d="M668.4 494.6 668.4 497.2" className="st151" />
                          <path d="M668.4 499.2 668.4 501.7" className="st151" />
                          <path d="M668.4 503.7 668.4 506.2" className="st151" />
                          <path d="M668.4 508.2 668.4 510.7" className="st151" />
                          <path d="M668.4 512.7 668.4 515.2" className="st151" />
                          <path d="M668.4 517.1 668.4 519.7" className="st151" />
                          <path d="M668.4 521.6 668.4 524.5 671 524.5" className="st151" />
                          <path d="M672.9 524.5 675.5 524.5" className="st151" />
                          <path d="M677.4 524.5 680.1 524.5 680.1 521.6" className="st151" />
                          <path d="M680.1 519.7 680.1 517.1" className="st151" />
                          <path d="M680.1 515.2 680.1 512.7" className="st151" />
                          <path d="M680.1 510.7 680.1 508.2" className="st151" />
                          <path d="M680.1 506.2 680.1 503.7" className="st151" />
                          <path d="M680.1 501.7 680.1 499.2" className="st151" />
                          <path d="M680.1 497.2 680.1 494.6" className="st151" />
                          <path d="M680.1 492.7 680.1 490.1" className="st151" />
                          <path d="M680.1 488.2 680.1 485.3" className="st151" />
                          <path d="M678.5 522.9 670 522.9 670 521.6" className="st151" />
                          <path d="M670 519.7 670 517.1" className="st151" />
                          <path d="M670 515.2 670 512.7" className="st151" />
                          <path d="M670 510.7 670 508.2" className="st151" />
                          <path d="M670 506.2 670 503.7" className="st151" />
                          <path d="M670 501.7 670 499.2" className="st151" />
                          <path d="M670 497.2 670 494.6" className="st151" />
                          <path d="M670 492.7 670 490.1" className="st151" />
                          <path d="M670 488.2 670 487 678.5 487 678.5 488.2" className="st151" />
                          <path d="M678.5 490.1 678.5 492.7" className="st151" />
                          <path d="M678.5 494.6 678.5 497.2" className="st151" />
                          <path d="M678.5 499.2 678.5 501.7" className="st151" />
                          <path d="M678.5 503.7 678.5 506.2" className="st151" />
                          <path d="M678.5 508.2 678.5 510.7" className="st151" />
                          <path d="M678.5 512.7 678.5 515.2" className="st151" />
                          <path d="M678.5 517.1 678.5 519.7" className="st151" />
                          <path d="M678.5 521.6 678.5 522.9" className="st151" />
                          <path
                            d="M509.9 280.3 508.3 280.3 508.3 338.1 509.9 338.1 509.9 280.3"
                            className="st151"
                          />
                          <path d="M513.3 44.3 519.2 44.3" className="st158" />
                          <path d="M529.4 44.3 539.6 44.3" className="st158" />
                          <path d="M549.8 44.3 560 44.3" className="st158" />
                          <path d="M570.2 44.3 580.4 44.3" className="st158" />
                          <path d="M590.6 44.3 600.8 44.3" className="st158" />
                          <path d="M611 44.3 621.2 44.3" className="st158" />
                          <path d="M631.4 44.3 641.6 44.3" className="st158" />
                          <path d="M651.8 44.3 662 44.3" className="st158" />
                          <path d="M672.2 44.3 678.2 44.3" className="st158" />
                          <path d="M519 575.2 519 569.8" className="st158" />
                          <path d="M519 559.6 519 549.4" className="st158" />
                          <path d="M519 539.2 519 529" className="st158" />
                          <path d="M519 518.8 519 508.6" className="st158" />
                          <path d="M519 498.4 519 488.2" className="st158" />
                          <path d="M519 478 519 467.8" className="st158" />
                          <path d="M519 457.6 519 447.4" className="st158" />
                          <path d="M519 437.2 519 427" className="st158" />
                          <path d="M519 416.8 519 406.6" className="st158" />
                          <path d="M519 396.4 519 386.2" className="st158" />
                          <path d="M519 376 519 365.8" className="st158" />
                          <path d="M519 355.6 519 345.4" className="st158" />
                          <path d="M519 335.2 519 325" className="st158" />
                          <path d="M519 314.8 519 304.6" className="st158" />
                          <path d="M519 294.4 519 284.2" className="st158" />
                          <path d="M519 274 519 263.8" className="st158" />
                          <path d="M519 253.6 519 243.4" className="st158" />
                          <path d="M519 233.2 519 223" className="st158" />
                          <path d="M519 212.9 519 202.7" className="st158" />
                          <path d="M519 192.5 519 182.3" className="st158" />
                          <path d="M519 172.1 519 161.9" className="st158" />
                          <path d="M519 151.7 519 141.5" className="st158" />
                          <path d="M519 49.7 519 44.3" className="st158" />
                          <path d="M678.2 575.2 664.9 575.2" className="st158" />
                          <path d="M654.7 575.2 644.5 575.2" className="st158" />
                          <path d="M634.3 575.2 624.1 575.2" className="st158" />
                          <path d="M613.9 575.2 603.7 575.2" className="st158" />
                          <path d="M593.5 575.2 583.3 575.2" className="st158" />
                          <path d="M573.1 575.2 562.9 575.2" className="st158" />
                          <path d="M552.7 575.2 542.5 575.2" className="st158" />
                          <path d="M532.3 575.2 519 575.2" className="st158" />
                          <path d="M678.2 44.3 678.2 49.7" className="st158" />
                          <path d="M678.2 59.9 678.2 70.1" className="st158" />
                          <path d="M678.2 80.3 678.2 90.5" className="st158" />
                          <path d="M678.2 100.7 678.2 110.9" className="st158" />
                          <path d="M678.2 121.1 678.2 131.3" className="st158" />
                          <path d="M678.2 141.5 678.2 151.7" className="st158" />
                          <path d="M678.2 161.9 678.2 172.1" className="st158" />
                          <path d="M678.2 182.3 678.2 192.5" className="st158" />
                          <path d="M678.2 202.7 678.2 212.9" className="st158" />
                          <path d="M678.2 223 678.2 233.2" className="st158" />
                          <path d="M678.2 243.4 678.2 253.6" className="st158" />
                          <path d="M678.2 263.8 678.2 274" className="st158" />
                          <path d="M678.2 284.2 678.2 294.4" className="st158" />
                          <path d="M678.2 304.6 678.2 314.8" className="st158" />
                          <path d="M678.2 325 678.2 335.2" className="st158" />
                          <path d="M678.2 345.4 678.2 355.6" className="st158" />
                          <path d="M678.2 365.8 678.2 376" className="st158" />
                          <path d="M678.2 386.2 678.2 396.4" className="st158" />
                          <path d="M678.2 406.6 678.2 416.8" className="st158" />
                          <path d="M678.2 427 678.2 437.2" className="st158" />
                          <path d="M678.2 447.4 678.2 457.6" className="st158" />
                          <path d="M678.2 467.8 678.2 478" className="st158" />
                          <path d="M678.2 488.2 678.2 498.4" className="st158" />
                          <path d="M678.2 508.6 678.2 518.8" className="st158" />
                          <path d="M678.2 529 678.2 539.2" className="st158" />
                          <path d="M678.2 549.4 678.2 559.6" className="st158" />
                          <path d="M678.2 569.8 678.2 575.2" className="st158" />
                          <path d="M353.4 377.2 433.5 377.2" className="st151" />
                          <path
                            fillRule="evenodd"
                            d="M136.6 142.1c0 .4-.4.8-.8.8-.5 0-.8-.4-.8-.8s.3-.7.8-.7c.4 0 .8.3.8.7"
                            clipRule="evenodd"
                          />
                          <path
                            d="M136.6 142.1c0 .4-.4.8-.8.8-.5 0-.8-.4-.8-.8s.3-.7.8-.7c.4 0 .8.3.8.7"
                            className="st152"
                          />
                          <path d="M135.8 142.2 139 142.2" className="st151" />
                          <path d="M135.8 142.2 132.5 142.2" className="st151" />
                          <path d="M135.8 299.5 135.8 292.7" className="st151" />
                          <text transform="matrix(1 0 0 1.0007 255.878 246.906)">
                            <tspan x={0} y={0} className="st160 st161 st162">
                              {"FF"}
                            </tspan>
                            <tspan x={6.4} y={0} className="st160 st161 st162">
                              {"L "}
                            </tspan>
                            <tspan x={11.3} y={0} className="st160 st161 st162">
                              {"D"}
                            </tspan>
                            <tspan x={15.9} y={0} className="st160 st161 st162">
                              {"I"}
                            </tspan>
                            <tspan x={17.9} y={0} className="st160 st161 st162">
                              {"N"}
                            </tspan>
                            <tspan x={23} y={0} className="st160 st161 st162">
                              {"I"}
                            </tspan>
                            <tspan x={24.9} y={0} className="st160 st161 st162">
                              {"N"}
                            </tspan>
                            <tspan x={30} y={0} className="st160 st161 st162">
                              {"G "}
                            </tspan>
                            <tspan x={37.6} y={0} className="st160 st161 st162">
                              {"A"}
                            </tspan>
                            <tspan x={42.7} y={0} className="st160 st161 st162">
                              {"R"}
                            </tspan>
                            <tspan x={46.8} y={0} className="st160 st161 st162">
                              {"E"}
                            </tspan>
                            <tspan x={50.4} y={0} className="st160 st161 st162">
                              {"A"}
                            </tspan>
                          </text>
                          <text transform="matrix(1 0 0 1.0007 536.421 299.894)">
                            <tspan x={0} y={0} className="st161 st163">
                              {"P"}
                            </tspan>
                            <tspan x={3.8} y={0} className="st161 st163">
                              {"E"}
                            </tspan>
                            <tspan x={7.4} y={0} className="st161 st163">
                              {"R"}
                            </tspan>
                            <tspan x={11.5} y={0} className="st161 st163">
                              {"G"}
                            </tspan>
                            <tspan x={17.2} y={0} className="st161 st163">
                              {"O"}
                            </tspan>
                            <tspan x={23} y={0} className="st161 st163">
                              {"L"}
                            </tspan>
                            <tspan x={25.9} y={0} className="st161 st163">
                              {"A"}
                            </tspan>
                            <tspan x={31} y={0} className="st161 st163" />
                            <tspan x={33} y={0} className="st161 st163">
                              {"D"}
                            </tspan>
                            <tspan x={37.6} y={0} className="st161 st163">
                              {"I"}
                            </tspan>
                            <tspan x={39.6} y={0} className="st161 st163">
                              {"N"}
                            </tspan>
                            <tspan x={44.7} y={0} className="st161 st163">
                              {"I"}
                            </tspan>
                            <tspan x={46.6} y={0} className="st161 st163">
                              {"N"}
                            </tspan>
                            <tspan x={51.7} y={0} className="st161 st163">
                              {"G "}
                            </tspan>
                            <tspan x={59.3} y={0} className="st161 st163">
                              {"A"}
                            </tspan>
                            <tspan x={64.4} y={0} className="st161 st163">
                              {"R"}
                            </tspan>
                            <tspan x={68.5} y={0} className="st161 st163">
                              {"E"}
                            </tspan>
                            <tspan x={72.1} y={0} className="st161 st163">
                              {"A"}
                            </tspan>
                          </text>
                          <text transform="translate(261.11 305.773)">
                            <tspan x={0} y={0} className="st164 st165">
                              {"HIGH COFFEE"}
                            </tspan>
                            <tspan x={-3} y={6.8} className="st164 st165">
                              {"TABLE SEATING"}
                            </tspan>
                          </text>
                          <text className="st164 st166" transform="translate(417.43 181.659)">
                            {"FOUNTAIN"}
                          </text>
                          <text className="st164 st166" transform="rotate(-90 422.63 -103.575)">
                            {"WATER STATION"}
                          </text>
                          <path d="M28.7 231.6H36V567.8H28.7z" className="st43" />
                          <path
                            d="M28.7 567.8H517.8000000000001V575.1999999999999H28.7z"
                            className="st43"
                          />
                          <path d="M28.7 133.8H36V138.60000000000002H28.7z" className="st43" />
                          <defs>
                            <path
                              id="SVGID_277_"
                              d="m113.2 254.7-.6.1-.1.1-.2.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1.2-.1.1.4.2.1.1c2.3 1.3 4.6 2.8 7 4.1l.1.1.4.2.1.1.5.3.1.1.4.2.1.1.4.2.1.1.4.2.1.1.4.2.1.1.5.3.1.1.4.2.1.1.4.2.1.1.4.2.1.1.4.2c.8 0 1.4.3 2.1.6l.2.1.3.1c.5.2 1.1.5 1.6.7l.2.1.5.3.1.1v.2h.1l-.1.3c-1.8 4.2-3.6 8.4-5.3 12.6l-.1.1-.5.1v-.1l-.3-.1-.2-.1c-.4-.2-.9-.3-1.4-.5l-.4-.1-.3-.1c-.6-.2-1.1-.5-1.6-.7l-.1-.1h-.1v-.1l-.2-.2c-1.4-.4-2.9-.8-4.3-1.2l-.2-.1-.3-.1-.2-.1c-.7-.2-1.3-.4-2-.5l-.2-.1-.3-.1c-2.2-.6-4.3-1.2-6.5-1.7l-.1-.1-.2-.1h-.2l-.1.1-.1.2-.1.1v.7h.1v.1h.1v.1h.1v.1h.1l1 1v.1h.1l.1.1c2.1.6 4.1 1 6.3 1.5l.3.1.3.1c3.7.7 6.5 1.9 9.9 2.7l.5.1.1.1v-.1l.5-.1c2.3-4.7 4.5-10 6.3-15l.1-.3h-.1v-.1l-.1-.1v-.1l-.3-.3c-2.9-2-6-3.1-9.1-5.2l-.1-.1-.3-.1-.1-.1-.1-.1-.1-.1-.3-.1-.1-.1-.1-.1-.1-.1-.3-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.3-.1-.1-.1-.1-.1-.1-.1-.3-.1-.1-.1-.1-.1-.1-.1-.3-.1-.1-.1-.1-.1c-.3-.2-.8-.5-1.1-.7l-.1-.1-.1-.1-.1-.1-.3-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.3-.1-.1-.1-.1-.1-.1-.1-.1-.1h-.7z"
                            />
                          </defs>
                          <clipPath id="SVGID_278_">
                            <use xlinkHref="#SVGID_277_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_278_)">
                            <defs>
                              <path
                                id="SVGID_279_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_280_">
                              <use xlinkHref="#SVGID_279_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M104.4 254.7H130.20000000000002V279.9H104.4z"
                              clipPath="url(#SVGID_280_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_281_"
                              d="m111.3 255.9-.3.3c-1 2.5-2.1 4.9-3.1 7.3l-.1.1-.1.2c-1.1 2.5-2.1 5-3.2 7.5l-.1.2-.1.3.1.1v.5h.2l.8.3c2.9.7 5.8 1.5 8.7 2.3l.2.1.3.1c1.5.4 3 .8 4.6 1.3l.1.1v.1h.1v.1h.1c1.4.7 2.9 1.2 4.3 1.8l.3.1v-.1l.2-.1c1.7-4.3 3.5-8.5 5.3-12.8l.1-.3h-.1v-.1h-.1v-.1l-.1-.1-.8-.4c-1-.4-1.9-.8-2.9-1.2l-.1-.1-.4-.1-.7-.1c-.2-.2-.7-.5-.9-.5l-.1-.1-.5-.3c-.4-.3-1.2-.6-1.6-1l-.5-.3-.1-.1-.4-.2-.1-.1c-3-1.6-5.8-3.3-8.6-5l-.1-.1-.1-.1"
                            />
                          </defs>
                          <clipPath id="SVGID_282_">
                            <use xlinkHref="#SVGID_281_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_282_)">
                            <defs>
                              <path
                                id="SVGID_283_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_284_">
                              <use xlinkHref="#SVGID_283_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M104.3 255.9H129.7V278.8H104.3z"
                              clipPath="url(#SVGID_284_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_285_"
                              d="m107.7 276 .1.1.1.1c1.3.9 1.7.6 3.3 1.1l1.1.3.3.1c2.7.7 5.4 1.3 8.2 1.9l1.6.4.7.1v-.1l-.3-.1-.8-.1c-1.9-.5-3.7-1.3-5.6-1.6l-.4-.2-.3-.1-.3-.1c-.9-.2-1.9-.4-2.9-.7l-.3-.1-.8-.2-.3-.1-.8-.2-.3-.1-.5-.1-.3-.1-.1-.1-.1-.1-.5-.1-.3-.1m-4.7-3.1-.1.3h.1l.1.1.4.2.2.1.3.1v-.6l.1-.1h-1.1zm22.8-10.8.1.1v-.1zm-9.6-5.9c3.1 1.9 6.3 4.4 9.5 5.8l.1.1v-.1l-.1-.1-.3-.1-.1-.1-.1-.1-.1-.1-.1-.1-.2-.1-.1-.1-.1-.1-.1-.1c-.3-.1-.6-.4-.8-.5l-.1-.1-.1-.1-.1-.1c-.7-.4-1.3-.8-2-1.2l-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.3-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1c-.2-.1-.5-.3-.7-.5l-.1-.1-.1-.1-.1-.1c-.6-.3-1.2-.8-1.8-1.2l-.1-.1-.5-.3-.1.8zm-.2 0 .1.1v-.1zm-5.5-1.1-.1.1v.2h.1l.5.5v.1h.1v-.1l.2-.4.1-.1-.7-.3z"
                            />
                          </defs>
                          <clipPath id="SVGID_286_">
                            <use xlinkHref="#SVGID_285_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_286_)">
                            <defs>
                              <path
                                id="SVGID_287_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_288_">
                              <use xlinkHref="#SVGID_287_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M103.4 254.9H126.60000000000001V279.9H103.4z"
                              clipPath="url(#SVGID_288_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_289_"
                              d="m127.1 244.5.2.1v-.1m2.2-17.6v.3h.1v.3h.1v.3h.1v.4h.1v.3h.1v.3h.1v.4h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1l-.1.4-.2.2-.3.1-.3.1-.3.1-.3.1-.3.1-.3.1-.3.1-2.7.5v-.1l-.1-.1h-.3c-3.2 1.1-6.5 2.2-9.7 3.4l-.2.1-.1.1-3.9 1.5-.1.1v.1h.1v.2h.1v.2h.1v.1h.1v.1h.1v.1h.1v.1h.1l.1.1.1.1.1.1.3.1 1.1.3.1.1v-.1l.3-.1 1.2-.4c1.9-.7 3.8-1.5 5.6-2.2l.2-.1.1-.1c3.4-1.6 6.5-2.1 9.7-3.5l.3-.3.1-.5h-.1v.1h-.1v-.4h-.1v-.4h-.1v-.4h-.1v-.4h-.1v-.4h-.1v-.4h-.1v-.4h-.1v-.4H132v-.4h-.1v-.4h-.1v-.3h-.1v-.3h-.1v-.4h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h.4v-.3h-.1v-.3h-.1v-.4h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.2h-.1v-.3h.3v-.5h-.1v-.2h-.1v-.3h-.1v-.2h-.1v-.3h-.1v-.2h-.1zm-6.4-1.1.2.1v-.1zm3.1-.3-.5.1-1 .1c-3.2.6-6.2.6-9.4.7l-1.7.1-1.8.1-1.5.1-.3.3-.1.1-.3.3-.1.1-.3.3-.1.1-.1.1-.1.1v1.2l.9-.1 1-.1c4-.2 7.9-.7 11.8-1l1.4-.1.3-.3c1.2-.3 3.9-1 5-1l.1.1.1.1v-.2h-.1v-.3h-.1v-.2h-.1v-.2h-.1v-.2l-.1-.1-.4-.2z"
                            />
                          </defs>
                          <clipPath id="SVGID_290_">
                            <use xlinkHref="#SVGID_289_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_290_)">
                            <defs>
                              <path
                                id="SVGID_291_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_292_">
                              <use xlinkHref="#SVGID_291_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M108.9 225.5H132.70000000000002V248.7H108.9z"
                              clipPath="url(#SVGID_292_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_293_"
                              d="m128.3 226.8-.3.1-.3.1-.3.1-.7.1-.5.1-.3.1-.5.1-.3.1-.3.1-.3.1-.1.1-.1.1h-.3l-.6.1-.7.1c-3.9.3-7.7.8-11.6 1l-2 .1-.3.1-.1.3-.1.3.1.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1l.3.3.3.1v-.1l1-.3.1-.1c1.4-.5 2.8-1.1 4.2-1.6l.1-.1.2-.1.1-.1c1.2-.4 2.3-.8 3.5-1.2l.1-.1 1-.3c1.1-.4 2.3-.8 3.5-1.2h.3l.1.1.5.1v-.1l1-.2c.6-.2 3.2-.6 3.6-1l.1-.4h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v.5H132v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h.4v-.5h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.4h.3v-.6h-.1v-.4h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3l-.1-.1-.1-.1"
                            />
                          </defs>
                          <clipPath id="SVGID_294_">
                            <use xlinkHref="#SVGID_293_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_294_)">
                            <defs>
                              <path
                                id="SVGID_295_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_296_">
                              <use xlinkHref="#SVGID_295_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M108.6 226.8H132.5V247H108.6z"
                              clipPath="url(#SVGID_296_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_297_"
                              d="m112.7 247.1-.2.1-.1.1-.1.1-.1.1-.1.1v.2h.1v.2l.1-.1.5-.1.2-.1h.2v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.2zm19.2-4.7-.1.1-.5.3c-2.8 1.1-4.9 1.5-7.7 2.8l-.2.1-.1.1-.2.1c-.7.3-1.6.6-2.3 1l-.1.1-.2.1c-.9.3-1.6.7-2.5.9l-.1.1-.2.1-.3.1 1 .1v-.1l.8-.2c4.2-1.8 8.5-3.5 12.8-5.2l.2-.2h-.3zm-23.7-13.8-.2.1-.1.1-.1.1.1.1.8.2.1.1v-.7zm15-2.8-1.4.1c-2.3.2-6.3.1-8.5.5l-.3.1 1.6.1v-.1l1.8-.1c2.5-.1 4.8-.1 7.3-.5l.5-.1z"
                            />
                          </defs>
                          <clipPath id="SVGID_298_">
                            <use xlinkHref="#SVGID_297_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_298_)">
                            <defs>
                              <path
                                id="SVGID_299_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_300_">
                              <use xlinkHref="#SVGID_299_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M107.8 225.8H132.1V248.10000000000002H107.8z"
                              clipPath="url(#SVGID_300_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_301_"
                              d="m85.7 240.2-1.1.1-.8.2c-2.4.4-4.6 1.9-6.3 3.7l-.1.3-.1.1c-1.7 2.3-2.3 4.4-2.4 7.4l.1.1v.8h.1v.4h.1v.4h.1v.5h.1v.1h.1v.2h.1v.2h.1v.2h.1v.2h.1v.1h.1v.2h.1v.2h.1v.2h.1v.2H76l.1.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1l.1.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1H77l.3.3v.1h.1l.3.3v.1h.1l.3.3v.1H78l.3.3v.1h.1c1.9 1.7 4.3 3 6.9 3.1l1.4.1v-.1l1-.1c5.3-.7 9.4-5.3 9.6-10.6l.1-1.4h-.1v-.4h-.1v-.4h-.1v-.4H97v-.4h-.1v-.3h.1v-.2h-.1v-.2h-.1v.3h-.1v-.3h-.1v-.2h-.1v-.2h-.1v-.2h-.1v-.2h-.1v-.1h-.1v-.1H96v-.1l-.1-.1h-.1v-.1h-.1v-.1h-.1v-.3h.4-.1v-.1h-.1v-.1h-.1v-.1l-.1-.1h-.1v-.1h-.1v-.1l-.1-.1h-.1v-.3l-.3-.3h-.1v-.1l-.3-.3h-.1v-.1l-.3-.3H94v-.1c-1.8-1.8-4.1-3.2-6.7-3.5l-.5-.1"
                            />
                          </defs>
                          <clipPath id="SVGID_302_">
                            <use xlinkHref="#SVGID_301_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_302_)">
                            <defs>
                              <path
                                id="SVGID_303_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_304_">
                              <use xlinkHref="#SVGID_303_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M74.9 240.2H97.4V262.59999999999997H74.9z"
                              clipPath="url(#SVGID_304_)"
                            />
                          </g>
                          <path
                            d="M106.7 34.3H114.10000000000001V45.199999999999996H106.7z"
                            className="st43"
                          />
                          <path d="M28.8 37.9H106.7V45.199999999999996H28.8z" className="st43" />
                          <path d="M28.7 138.5H36V231.6H28.7z" className="st0" />
                          <defs>
                            <path
                              id="SVGID_305_"
                              d="M432.7 537.3v30.5h3.5v-30.5zm-140.6 0v30.5h3.5v-30.5zm-65.2-2.3v32.8h3.5V535zm32.6-28.7v61.5h3.5v-57.9h29.1v1.3h3.5v-4.8h-36.1zm205.7-1.4v1.4h-32.6v3.5h.1v1.3h3.5v-1.3h29v57.9h3.5v-29h24.8v-3.5h-24.8v-30.4h-3.5zm-115.3-35.5v4.4H196.5v-4.3H193v4.3h-4.4v3.5h4.4v90.4h3.5v-90.4h153.4l-.1 61.3v29.1h7.4v-25.4h4.5V535h-8.3v-57.6h6.3v-3.5h-6.3v-4.4h-3.5zm124.2-34.7v3.5h36.3v-3.5zm-81.9 0v39.1h-6.3v3.5h10.2V535h-8.2v7.3h4.6v25.4h7.4v-25.4h-.2v-65h65.6v1.4h3.5v-1.4h41.7v-3.5H395.7v-35.6h5v-3.5zM36 424.1v7.3h29V470H36v7.4h124.9v-3.5H68.8V470h-.2v-38.5h.2v-7.3H36zm157-2.1v19.9h3.5v-16.5h153.4v17.9h3.5V422zm239.6-63.6V422h-.8v12.8h-5v3.5h8.5v-79.9z"
                            />
                          </defs>
                          <use
                            xlinkHref="#SVGID_305_"
                            fill="#2e5764"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            overflow="visible"
                          />
                          <clipPath id="SVGID_306_">
                            <use xlinkHref="#SVGID_305_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_306_)">
                            <defs>
                              <path
                                id="SVGID_307_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <use xlinkHref="#SVGID_307_" fill="#2e5764" overflow="visible" />
                            <clipPath id="SVGID_308_">
                              <use xlinkHref="#SVGID_307_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#2e5764"
                              d="M36 358.4H510.4V567.8H36z"
                              clipPath="url(#SVGID_308_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_309_"
                              d="M182.1 134.8v7.4h7.2v-7.4zm-146.1 0v7.4h104.2v-7.4z"
                            />
                          </defs>
                          <clipPath id="SVGID_310_">
                            <use xlinkHref="#SVGID_309_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_310_)">
                            <defs>
                              <path
                                id="SVGID_311_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_312_">
                              <use xlinkHref="#SVGID_311_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M36 134.8H189.2V142.20000000000002H36z"
                              clipPath="url(#SVGID_312_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_313_"
                              d="m134.6 195 .1.1v-.1m-14-20-.1.1c-1.1.8-1.5.4-1.6 1.8v.4h1c3.9.4 7.7.7 11.7.9l2.4.1v-.1l.2-.2.7-.1 1.4-.1 1.3-.1h1.5l.3.1.1.1v2.7h.1v1.1h.1v1.2h.1v1.2h.1v1.1h.1v1.2h.1v1.2h.1v1.1h.1v1.2h.1v1.2h.1l-.1 1.2-.1.1-.1.1-.7.1-.9.1-1 .1-2.1.1-.3.1v-.1l-.1-.1c-2 .2-4.5.7-6.5 1.1l-.4.1-.3.1c-2.5.4-5 1-7.5 1.5l-.1.1v.6h.1v.1h.1v.2h.1v.2h.1c.3.3 1.3.6 1.7.8l.2.1v-.1l3.1-.6 1.1-.3c2.1-.5 4.2-1.1 6.3-1.4l.4-.1 1.4-.3c1.6-.2 4-.4 5.6-1l.3-.3.1-5.4h-.1V187h-.1v-1.2h-.1v-1.2h-.1v-1.2h-.1v-1.2h-.5v-1.8h-.1v-.5h-.1v-.6h-.1v-.5h-.1v-.8h-.1v-.5h-.1v-.5l-.1-.1c-.6-.4-.9-.3-1.6-.5l-1.3-.1-4.2-.1c-1.2-.2-2.5-.3-3.7-.4l-6.1-.7-.8-.1z"
                            />
                          </defs>
                          <clipPath id="SVGID_314_">
                            <use xlinkHref="#SVGID_313_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_314_)">
                            <defs>
                              <path
                                id="SVGID_315_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_316_">
                              <use xlinkHref="#SVGID_315_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M119 175H140.5V197.4H119z"
                              clipPath="url(#SVGID_316_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_317_"
                              d="m118.7 177.3-.1.1-.1.4.1.1v1.2h.1v1.2h.1v1.2h.1v1.2h.1v1.2h.1v1.2h.1v1.2h.1v1.2h.1v1.2h.1v1.2h.1v1.2h.1v1.2h.1v1.2h.1v1.2h.1l.1.1v.1h.1l.1.1.8.1v-.1l1-.2.3-.1c1.6-.3 3.2-.7 4.8-1l1.2-.2.3-.1.8-.1.3-.1 1.2-.2.3-.1.8-.1.3-.1 1.2-.2.3-.1.8-.1h.5l.1.1.1.1 1.1.1v-.1l1-.1 2.7-.2.3-.1.1-.1.1-1.5h-.1v-1.2h-.1v-1.1h-.1V187h-.4v-2.2h-.1v-.8h-.1v-1.1h-.1v-1.2h-.1v-1.1h-.1v-1.1h-.1v-1.4l-.3-.3h-2.4l-2.4.2-.2.1-.1.1-.7.1v-.1l-1.2-.1c-3.8-.2-7.7-.5-11.5-.8l-.8-.1"
                            />
                          </defs>
                          <clipPath id="SVGID_318_">
                            <use xlinkHref="#SVGID_317_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_318_)">
                            <defs>
                              <path
                                id="SVGID_319_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_320_">
                              <use xlinkHref="#SVGID_319_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M118.5 177.3H140.3V195.20000000000002H118.5z"
                              clipPath="url(#SVGID_320_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_321_"
                              d="m119.8 195.4-.8.4v.2h.1v.2h.1l.3.1v-.1l.3-.1h.3v-.1h-.1v-.2h-.1v-.1h.1v-.2m17.3-1.2-.5.1c-4.2.5-8.3 1.9-12.4 2.6l-.3.1.6.1 1 .1v-.1l.4-.1c3.7-.9 7.4-1.7 11.1-2.6l.5-.1h-.4zm.4-.1.3.1v-.1zm.4 0 .3.1v-.1zm.3-.1.2.1v-.1zm.3-.1.3.1v-.1zm.3 0 .3.1v-.1zm.2-.1.3.1v-.1zm.3-.1.1.1v-.1zM118 176.5l-.1.2.1.1.2.1.1.1.2.1.4.2v-.7h-.9zm5.8-1.5-.4.1-.1.1.6.1c2.9.3 6 .8 8.9 1l2.1.1v-.1l-.3-.1-.4-.1-1-.1-.4-.1-.5-.1-7.3-.8z"
                            />
                          </defs>
                          <clipPath id="SVGID_322_">
                            <use xlinkHref="#SVGID_321_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_322_)">
                            <defs>
                              <path
                                id="SVGID_323_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_324_">
                              <use xlinkHref="#SVGID_323_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M117.9 175H139.70000000000002V197.2H117.9z"
                              clipPath="url(#SVGID_324_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_325_"
                              d="m127.9 160 .1.1v-.1zm-5.4-16.4v.1h.1l.1.1v.1h.1l.2.2v.1h.1l.1.1v.1h.1l.1.1v.1h.1l.2.2v.1h.1l.1.1v.1h.1l.1.1v.1h.1l.2.2v.1h.1l.2.2v.1h.1l.2.2v.1h.1l.2.2v.1h.1l.1.1v.1h.1l.2.2v.1h.1l.2.2v.1h.1l.2.2v.1h.1l.2.2v.1h.1l.1.1v.1h.1l.2.2v.1h.1l.2.2v.1h.1l.2.2v.1h.1l.2.2v.1h.1l.1.1v.1h.1l.2.2v.1h.1l.2.2v.1h.1l.2.2v.1h.1l.2.2v.1h.1l.1.1v.1h.1l.2.2v.1h.1l.2.2v.1h.1l.2.2v.1h.1l.1.1v.1h.1l.1.1v.1h.1l.1.1v.1h.1l.1.1v.1h.1l.1.1-.1.4-.4.4-.1.1-.2.2-.1.1-.1.1-.1.1-.2.2-.1.1-.1.1-.1.1-.1.1-.1.1-.2.2-.1.1-.2.2-.1.1-.2.2-.1.1-.2.2-.1.1-.1.1-.4.2-.4.1-3.8 3.8-.1.1c-1.9 1.7-3.6 3.7-5.4 5.5l-.1.1-1 1-.1.1.4.4.1.1.1.1.1.1.1.1.9.1v-.1l.3-.1.3-.1.3-.1.3-.1 1.8-1.8.1-.1.5-.5.1-.1.5-.5.1-.1.5-.5c.5-.6 1.2-1.3 1.6-1.9l.5-.5.1-.1.5-.5c1.8-2.5 4.7-4 6.4-6.6l.1-.3.1-.4-.1-.1h-.1v-.1l-.1-.1h-.1v-.1l-.1-.1h-.1v-.1l-.1-.1H131v-.1l-.1-.1h-.1v-.1l-.1-.1h-.1v-.1l-.1-.1h-.1v-.1l-.1-.1h-.1v-.1l-.1-.1h-.1v1.2l-.1-.1h-.1v-.1l-.1-.1h-.1v-.1l-.1-.1h-.1v-.1l-.1-.1h-.1v-.1l-.1-.1h-.1v-.1l-.1-.1h.1v-.1l-.1-.1h-.1v-.1l-.1-.1h-.1v-.1l-.2-.2h-.1v-.1l-.2-.2h-.1v-.1l-.2-.2h-.1v-.1l-.2-.2h-.1v-.1l-.2-.2h-.1v-.1l-.2-.2h.1v-.1l-.2-.2h-.1v-.1l-.2-.2h-.1v-.1l-.2-.2h-.1v-.1l-.2-.2h-.1v-.1l-.2-.2h-.1v-.1l-.2-.2h-.1v-.1l-.2-.2h-.1v-.1l-.2-.2h-.1v-.1l-.2-.2h-.1v-.1l-.2-.2h-.1v-.1l-.2-.2h.2v-.1l-.4-.4h-.1v-.1l-.4-.4h-.1v-.1zm-1.7-1.2-.1.1-1.9 1c-1.2.8-2.4 1.7-3.5 2.5l-.4.2-.1.1-.5.3-.1.1c-.6.3-1.1.6-1.6.9l-.1.1-1.1.5-.1.1-1.1.5-.1.1-1.1.5-.1.1-1.1.5-.1.1-1.2.6-.1.1-.1.1-.1.1-.1.1-.1.1-.3.1-.1.1-.1.1-.1.1-.1.1-.1.1-.3.1-.5 1-.1.4-.1.1-.1.3v.2h.1v.1h.1v.1h.1v.1h.1v.1h.1v.2h.1l.1.1.1.1v-.1l.1-.1.1-.1c3.1-1.8 6-3.5 9-5.3l.1-.1.1-.1.1-.1.3-.1.1-.1.3-.1.1-.1.3-.1.1-.1.1-.1.1-.1.3-.1.1-.1.3-.1.1-.1c.5-.2.9-.6 1.4-.8l.1-.1.1-.3.5-.5c1-.7 2.1-1.6 3.1-2.4l.1-.1h.5l.2.2v-.1l-.4-.4h-.2v-.1l-.5-.5h-.7z"
                            />
                          </defs>
                          <clipPath id="SVGID_326_">
                            <use xlinkHref="#SVGID_325_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_326_)">
                            <defs>
                              <path
                                id="SVGID_327_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_328_">
                              <use xlinkHref="#SVGID_327_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M104.3 142.4H131.6V169.4H104.3z"
                              clipPath="url(#SVGID_328_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_329_"
                              d="m121.7 143.4-.2.1-.1.1-.1.1c-.3.3-.9.7-1.2 1l-.3.3-.1.1c-.3.4-1.3 1-1.6 1.4l-.1.1-.1.3-.1.1-.1.1-.1.1-.3.1-.1.1-.1.1-.1.1-.3.1-.1.1-.3.1-.1.1-.3.1-.1.1c-.5.3-1.1.7-1.6 1l-.1.1-.3.1-.1.1-.3.1-.1.1-.3.1-.1.1-.3.1-.1.1-.1.1-.1.1-.3.1-.1.1-.3.1-.1.1-.3.1-.1.1c-.5.3-1.1.7-1.6 1l-.1.1-.3.1-.1.1-.3.1c-.4.3-1.1.6-1.6 1l-.4.2-.1.1c-.6.3-1.3.7-1.9 1.1l-.1.1-.4.2-.1.1-.3.1.1.1v.3h.1v.3h.1l.2.2v.1h.1l.2.2v.1h.1l.2.2v.1h.1l.1.1v.1h.1l.2.2v.1h.1l.2.2v.1h.1l.1.1v.1h.1l.2.2v.1h.1l.2.2v.1h.1l.1.1v.1h.1l.2.2v.1h.1l.2.2v.1h.1l.1.1v.1h.1l.2.2v.1h.1l.2.2v.1h.1l.1.1v.1h.1l.2.2v.1h.1l.2.2v.1h.1l.1.1v.1h.1l.2.2v.1h.1l.2.2v.1h.1l.1.1v.1h.1l.2.2v.1h.1l.2.2v.1h.1l.1.1v.1h.1l.2.2v.1h.1l.2.2v.1h.1l.1.1v.1h.1l.2.2v.1h.1l.2.2v.1h.1l.1.1v.1h.1l.2.2v.1h.1l.2.2v.1h.1l.1.1v.1h.1l.3.3v.1h.1l.2.2v.1h.1l.2.2v.1h.1l.3.3v.1h.1l.2.2v.1h.1l.2.2v.1h.1l.2.2v.1h.1l.3.1.2.1v-.1l1.7-1.7.1-.1.9-.9.1-.1 1-1 .1-.1.9-.9.1-.1.1-.1 5.8-5.8.4-.1.1-.1.1-.1.1-.1.2-.2.1-.1.1-.1.1-.1.1-.1.1-.1.2-.2c.2-.1.8-.6 1-.7l.1-.1.2-.2.1-.1.1-.1.1-.1.2-.2.1-.1.3-.3.1-.1.1-.5-.3-.3h-.1v-.1l-.3-.3h-.1v-.1l-.3-.3h-.1v1.3l-.3-.3h-.1v-.1l-.3-.3h-.1v-.1l-.1-.1h-.1v-.1l-.2-.2h-.1v-.1l-.1-.1h-.1v-.1l-.2-.2h-.1v-.1l-.1-.1h-.1v-.1l-.2-.2h-.1v-.1l-.1-.1h-.1v-.6l-.2-.2h-.1v-.1l-.1-.1h.3v-.1l-.2-.2h-.1v-.3l-.1-.1h-.1v-.1l-.2-.2h-.1v-.1l-.1-.1h-.1v-.1l-.2-.2h-.1v-.1l-.1-.1h-.1v-.1l-.2-.2h-.1v-.1l-.1-.1h-.1v-.1l-.2-.2h-.1v-.1l-.1-.1h-.1v-.1l-.2-.2h-.1v-.6l-.1-.1h-.1v-.1l-.2-.2h-.1v-.1l-.1-.1h-.1v-.1l-.2-.2h-.1v-.1l-.1-.1h-.1v-.1l-.2-.2h-.1v-.1l-.3-.3h-.1v-.1l-.3-.3"
                            />
                          </defs>
                          <clipPath id="SVGID_330_">
                            <use xlinkHref="#SVGID_329_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_330_)">
                            <defs>
                              <path
                                id="SVGID_331_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_332_">
                              <use xlinkHref="#SVGID_331_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M104.7 143.4H130.9V168.8H104.7z"
                              clipPath="url(#SVGID_332_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_333_"
                              d="m116.1 168.8-.2.4-.1.2-.1.3v.2h.1l.1.1v-.1l.2-.1.1-.1.5-.5-.5-.5m15.1-12.5-.1.1c-1.2 1.8-3.3 2.9-4.5 4.6l-.3.3-.1.1-.4.4-.1.1-.6.6-.1.1-.7.7-.1.1-.7.7-.1.1c-.8.8-1.5 1.6-2.2 2.4l-.3.1-.1.3-.5.5.1.1v-.1l.3-.1.1-.1.5-.3 1.5-1.5.1-.1.5-.5.1-.1.5-.5.1-.1c.7-.6 1.2-1.3 1.8-2l.1-.1.6-.6.1-.1c1.5-1.6 2.8-3.2 4.4-4.8l.1-.1zm-26.9-2.3-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1v.1h.1v.2h.1l.1.1v-.1l.3-.1.5-.1.1-.1h-.1v-.1l-.1-.1h-.1v-.3l-.1-.1zm12.6-9.3-.1.1c-3.2 1.9-6.7 3.3-9.6 5.5v.1l.1-.1c3.2-1.8 6.7-3.4 9.7-5.5l.1-.1zm.1-.1.1.1v-.1zm.3-.1"
                            />
                          </defs>
                          <clipPath id="SVGID_334_">
                            <use xlinkHref="#SVGID_333_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_334_)">
                            <defs>
                              <path
                                id="SVGID_335_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_336_">
                              <use xlinkHref="#SVGID_335_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M103.7 144.4H131.4V170H103.7z"
                              clipPath="url(#SVGID_336_)"
                            />
                          </g>
                          <defs>
                            <path
                              id="SVGID_337_"
                              d="m90.3 170.4-.5.1c-5.1.7-9.2 4.9-9.7 10.1l-.1.4.1.1v2.1h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.3h.1v.1h.1v.1h.1v.2h.1v.1h.1v.1H81v.3h.1v.1h.1v.2h.1v.1h.1v.1h.1v.2h.1l.1.1v.1h.1l.1.1v.1h.1l.1.1v.1h.1l.1.1v.1H82l.1.1v.1h.1l.1.1v.1h.1l.1.1v.1h.1l.1.1v.1h.1v.1h.1c2 2.3 4.9 3.8 8 3.9l1.6.1v-.1l.5-.1c5-.6 9.3-5 9.7-10l.1-2.5h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.1v-.3h-.3v-.6h-.1v-.2h-.1v-.1h-.1v-.1h-.1v-.2h-.1v-.1h-.1v-.1h-.2v-.1h-.1v-.1h-.1v-.2h-.1v-.1h-.1v-.1h-.1v-.1l.3-.3h-.1v-.1l-.1-.1h-.1v-.1l-.1-.1h-.1v-.1l-.1-.1h-.1v-.1l-.1-.1h-.1v-.1l-.1-.1h-.1v-.1l-.1-.1h-.1v-.1c-1.9-2.2-4.5-3.8-7.3-4.2l-1-.1"
                            />
                          </defs>
                          <clipPath id="SVGID_338_">
                            <use xlinkHref="#SVGID_337_" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#SVGID_338_)">
                            <defs>
                              <path
                                id="SVGID_339_"
                                d="M-218.6-721.6H1689.4V627.8000000000001H-218.6z"
                              />
                            </defs>
                            <clipPath id="SVGID_340_">
                              <use xlinkHref="#SVGID_339_" overflow="visible" />
                            </clipPath>
                            <path
                              fill="#fff"
                              d="M80 170.4H102.4V192.8H80z"
                              clipPath="url(#SVGID_340_)"
                            />
                          </g>
                          <path d="M41.9 328.4 45.5 324.8" className="st141" />
                          <path d="M58.1 328.4 61.7 324.8" className="st141" />
                          <path d="M74.2 328.4 77.8 324.8" className="st141" />
                          <path d="M90.4 328.4 93.9 324.8" className="st141" />
                          <path d="M106.6 328.4 110.1 324.8" className="st141" />
                          <path d="M122.7 328.4 126.2 324.8" className="st141" />
                          <path d="M45.9 328.4 49.4 324.8" className="st141" />
                          <path d="M62 328.4 65.5 324.8" className="st141" />
                          <path d="M78.2 328.4 81.7 324.8" className="st141" />
                          <path d="M94.4 328.4 97.9 324.8" className="st141" />
                          <path d="M110.5 328.4 114 324.8" className="st141" />
                          <path d="M36 431.4 65.1 431.4" className="st145" />
                          <path d="M68.6 431.4 68.8 431.4 68.8 424.1 36 424.1" className="st145" />
                          <path d="M65.1 431.4 68.6 431.4" className="st143" />
                          <path d="M36 477.4 68.8 477.4" className="st145" />
                          <path d="M68.8 473.8 68.8 470 68.6 470" className="st145" />
                          <path d="M65.1 470 36 470" className="st145" />
                          <path d="M68.8 477.4 68.8 473.8" className="st143" />
                          <path d="M68.6 470 65.1 470" className="st143" />
                          <path d="M65.1 431.4 65.1 470" className="st145" />
                          <path d="M68.6 470 68.6 431.4" className="st145" />
                          <path d="M65.1 470 68.6 470" className="st143" />
                          <path d="M68.6 431.4 65.1 431.4" className="st143" />
                          <path d="M122.9 324.8 120.9 324.8" className="st144" />
                          <path d="M119 324.8 117.1 324.8" className="st144" />
                          <path d="M115.2 324.8 113.3 324.8" className="st144" />
                          <path d="M111.4 324.8 109.4 324.8" className="st144" />
                          <path d="M107.5 324.8 105.5 324.8" className="st144" />
                          <path d="M103.6 324.8 101.7 324.8" className="st144" />
                          <path d="M99.7 324.8 97.8 324.8" className="st144" />
                          <path d="M95.9 324.8 93.9 324.8" className="st144" />
                          <path d="M92 324.8 90.1 324.8" className="st144" />
                          <path d="M88.2 324.8 86.3 324.8" className="st144" />
                          <path d="M84.4 324.8 82.4 324.8" className="st144" />
                          <path d="M80.5 324.8 78.6 324.8" className="st144" />
                          <path d="M76.6 324.8 74.7 324.8" className="st144" />
                          <path d="M72.8 324.8 70.8 324.8" className="st144" />
                          <path d="M68.9 324.8 67 324.8" className="st144" />
                          <path d="M65.1 324.8 63.2 324.8" className="st144" />
                          <path d="M61.2 324.8 59.3 324.8" className="st144" />
                          <path d="M57.4 324.8 55.4 324.8" className="st144" />
                          <path d="M53.5 324.8 51.6 324.8" className="st144" />
                          <path d="M49.6 324.8 47.7 324.8" className="st144" />
                          <path d="M45.8 324.8 43.8 324.8" className="st144" />
                          <path d="M41.9 324.8 40 324.8" className="st144" />
                          <path d="M38.1 324.8 36 324.8" className="st144" />
                          <path d="M36 328.4 38.1 328.4" className="st144" />
                          <path d="M40 328.4 41.9 328.4" className="st144" />
                          <path d="M43.8 328.4 45.8 328.4" className="st144" />
                          <path d="M47.7 328.4 49.6 328.4" className="st144" />
                          <path d="M51.6 328.4 53.5 328.4" className="st144" />
                          <path d="M55.4 328.4 57.4 328.4" className="st144" />
                          <path d="M59.3 328.4 61.2 328.4" className="st144" />
                          <path d="M63.2 328.4 65.1 328.4" className="st144" />
                          <path d="M67 328.4 68.9 328.4" className="st144" />
                          <path d="M70.8 328.4 72.8 328.4" className="st144" />
                          <path d="M74.7 328.4 76.6 328.4" className="st144" />
                          <path d="M78.6 328.4 80.5 328.4" className="st144" />
                          <path d="M82.4 328.4 84.4 328.4" className="st144" />
                          <path d="M86.3 328.4 88.2 328.4" className="st144" />
                          <path d="M90.1 328.4 92 328.4" className="st144" />
                          <path d="M93.9 328.4 95.9 328.4" className="st144" />
                          <path d="M97.8 328.4 99.7 328.4" className="st144" />
                          <path d="M101.7 328.4 103.6 328.4" className="st144" />
                          <path d="M105.5 328.4 107.5 328.4" className="st144" />
                          <path d="M109.4 328.4 111.4 328.4" className="st144" />
                          <path d="M113.3 328.4 115.2 328.4" className="st144" />
                          <path d="M117.1 328.4 119 328.4" className="st144" />
                          <path d="M120.9 328.4 122.9 328.4" className="st144" />
                          <path
                            d="M68.8 477.4 160.9 477.4 160.9 473.8 68.8 473.8"
                            className="st145"
                          />
                          <path d="M68.8 473.8 68.8 477.4" className="st143" />
                          <path d="M117.9 278.9 117.8 278.9" className="st146" />
                          <path d="M117.9 278.9 118.1 278.9" className="st146" />
                          <path
                            d="M123.2 278.6 123.2 278.7 123.6 279.1 123.7 279.5 123.8 279.6 123.9 279.6 124.3 278.8"
                            className="st146"
                          />
                          <path d="M124.5 278.4 125.6 275.8 128.6 268.7" className="st146" />
                          <path d="M123.9 262.8 125.4 263.6" className="st146" />
                          <path d="M123.9 262.8 125.4 263.6" className="st146" />
                          <path d="M114 254.9 113.7 254.9" className="st146" />
                          <path d="M114 254.9 114.1 254.9" className="st146" />
                          <path d="M113.7 254.9 112.5 254.9" className="st146" />
                          <path d="M112.1 255.2 112.2 255.1" className="st146" />
                          <path d="M112.1 255.2 111.8 255.5" className="st146" />
                          <path d="M112.2 255.1 112.5 254.9" className="st146" />
                          <path d="M114.1 254.9 114.1 254.9" className="st146" />
                          <path d="M111.8 255.5 111.7 255.8 111.6 256" className="st146" />
                          <path d="M124.4 261 124.1 260.9" className="st146" />
                          <path d="M124.4 261 121.9 259.5" className="st146" />
                          <path d="M125.1 261.4 124.1 260.9" className="st146" />
                          <path d="M121.9 259.5 116.2 255.9 114.4 254.8" className="st146" />
                          <path
                            d="M114.4 254.8 114.3 254.7 114 254.8 112.7 254.9 112.6 254.9"
                            className="st146"
                          />
                          <path d="M112.6 254.9 112.2 255 112 255.3" className="st146" />
                          <path d="M104.6 272.8 104.6 272.6" className="st146" />
                          <path d="M104.6 272.8 104.5 273.2 104.4 273.6" className="st146" />
                          <path d="M119.6 277.1 118.1 276.6" className="st146" />
                          <path d="M104.4 273.6 104.6 274" className="st146" />
                          <path d="M104.4 273.6 104.4 273.6" className="st146" />
                          <path d="M118.1 276.6 119.7 277.1" className="st146" />
                          <path d="M105.6 275.1 105.4 274.9" className="st146" />
                          <path d="M105.6 275.1 105.6 275.2" className="st146" />
                          <path d="M105.4 274.9 104.6 274" className="st146" />
                          <path d="M105.6 275.2 105.6 275.1" className="st146" />
                          <path d="M104.4 273.4 104.3 273.8 104.5 274" className="st146" />
                          <path d="M125.8 275.9 123.9 279.8" className="st146" />
                          <path d="M123.9 279.8 123.3 279.9" className="st146" />
                          <path d="M117.2 278.2 117.9 278.5" className="st146" />
                          <path d="M117.2 278.2 114.3 277.5" className="st146" />
                          <path d="M117.9 278.5 119.9 279.2 121.5 279.6" className="st146" />
                          <path d="M107.8 276 114.3 277.5" className="st146" />
                          <path d="M107.8 276 105.8 275.5" className="st146" />
                          <path d="M122.4 279.8 123.2 279.9" className="st146" />
                          <path d="M122.4 279.8 121.5 279.6" className="st146" />
                          <path d="M123.2 279.9 123.3 279.9" className="st146" />
                          <path
                            d="M105.8 275.5 105.6 275.4 105.4 275.2 104.6 274.2 104.5 274"
                            className="st146"
                          />
                          <path d="M121.8 270 119.6 275.2" className="st146" />
                          <path d="M121.8 270 123.9 264.9" className="st146" />
                          <path d="M119.6 275.2 119.2 276.7" className="st146" />
                          <path d="M119.4 275.9 119.2 276.7" className="st146" />
                          <path d="M119.4 275.9 119.2 276.6" className="st146" />
                          <path d="M123.6 278.7 123.5 278.7" className="st146" />
                          <path d="M123.6 278.7 123.7 278.6" className="st146" />
                          <path d="M123.5 278.7 123 278.5 121.5 277.9" className="st146" />
                          <path d="M123.9 264.9 124.6 263.6 124.7 263.6" className="st146" />
                          <path d="M119.2 276.7 119.2 276.6" className="st146" />
                          <path d="M119.2 276.7 119.4 277 119.7 277.2" className="st146" />
                          <path d="M121.5 277.9 120.1 277.3" className="st146" />
                          <path d="M119.7 277.2 120.1 277.3" className="st146" />
                          <path d="M123.7 278.6 123.6 278.6" className="st146" />
                          <path d="M119.2 276.6 119 276.5 117 276" className="st146" />
                          <path d="M110.9 256.3 111.4 255.9" className="st146" />
                          <path d="M110.9 256.3 109.2 260.5" className="st146" />
                          <path d="M111.4 255.9 111.4 255.9" className="st146" />
                          <path d="M111.4 255.9 112.1 256.3 116.7 259" className="st146" />
                          <path d="M112.1 256.3 116.7 259" className="st146" />
                          <path d="M112.1 256.3 116.7 259" className="st146" />
                          <path d="M104.3 271.9 104.4 272.5" className="st146" />
                          <path d="M104.3 271.9 106.1 267.7" className="st146" />
                          <path d="M104.4 272.5 104.4 272.5 105.2 272.8" className="st146" />
                          <path d="M124.7 263.6 124.5 263.4" className="st146" />
                          <path d="M117 276 110.3 274.1 105.2 272.8" className="st146" />
                          <path d="M106.1 267.7 109.2 260.5" className="st146" />
                          <path d="M116.7 259 122.6 262.5 124.5 263.4" className="st146" />
                          <path d="M117 276 110.3 274.1" className="st146" />
                          <path d="M117 276 119 276.5" className="st146" />
                          <path d="M110.3 274.1 105.2 272.8" className="st146" />
                          <path d="M106.1 267.7 109.2 260.5" className="st146" />
                          <path d="M106.1 267.7 104.3 271.9" className="st146" />
                          <path d="M109.2 260.5 110.9 256.3" className="st146" />
                          <path d="M116.7 259 122.6 262.5" className="st146" />
                          <path d="M116.7 259 112.1 256.3" className="st146" />
                          <path d="M122.6 262.5 124.5 263.4" className="st146" />
                          <path d="M124.7 263.6 124.5 263.4" className="st146" />
                          <path d="M119.2 276.6 119 276.5" className="st146" />
                          <path d="M123 278.5 123.1 278.6 123.5 278.7" className="st146" />
                          <path d="M124.8 277.4 124.3 278.7" className="st146" />
                          <path d="M124.3 278.7 123.9 278.9 123.5 278.7" className="st146" />
                          <path d="M117.9 278.9 118.1 278.9" className="st146" />
                          <path d="M117.9 278.9 117.8 278.9" className="st146" />
                          <path d="M116.3 256 116.9 256.1 117.1 256.2" className="st146" />
                          <path d="M117.1 256.6 117.4 256.7" className="st146" />
                          <path d="M117.1 256.2 117.5 256.3" className="st146" />
                          <path d="M117.3 256.6 117.4 256.7" className="st146" />
                          <path d="M117.5 256.4 117.5 256.3" className="st146" />
                          <path
                            d="M117.5 256.4 117.9 256.6 124.9 261 125.6 261.4 126.1 261.8 126.6 262.1 126.7 262.1"
                            className="st146"
                          />
                          <path d="M107.5 275.9 108.4 276.5" className="st146" />
                          <path d="M108.6 276.2 108.8 276.3" className="st146" />
                          <path d="M108.4 276.5 108.6 276.6" className="st146" />
                          <path d="M108.8 276.3 109.1 276.4" className="st146" />
                          <path d="M108.6 276.6 108.9 276.8" className="st146" />
                          <path d="M109 276.4 109.1 276.4" className="st146" />
                          <path d="M109 276.4 109.4 276.5" className="st146" />
                          <path d="M109 276.8 108.9 276.8" className="st146" />
                          <path d="M109 276.8 109.4 276.9" className="st146" />
                          <path d="M109.4 276.5 117.6 278.4" className="st146" />
                          <path d="M109.4 276.9 117.5 278.8" className="st146" />
                          <path d="M117.6 278.4 118.1 278.5" className="st146" />
                          <path
                            d="M117.5 278.8 118.2 278.9 118.8 279.1 119.4 279.2 122.7 280 123 280 123.1 279.9"
                            className="st146"
                          />
                          <path d="M118.3 278.9 117.9 278.9" className="st146" />
                          <path d="M118.1 278.5 118 278.5" className="st146" />
                          <path
                            d="M112 255.3 111.8 255.2 111.4 255.1 111.1 254.9 111 254.9 110.9 255.1 110.9 255.1"
                            className="st146"
                          />
                          <path d="M111.2 255.1 111.2 255.2" className="st146" />
                          <path d="M111.2 255.1 111.8 255.7" className="st146" />
                          <path d="M110.9 255.1 110.9 255.3 111.4 256" className="st146" />
                          <path
                            d="M104.4 273.6 104.1 273.4 103.7 273.3 103.5 273.2 103.4 273.1 103.4 272.9 103.4 272.9"
                            className="st146"
                          />
                          <path d="M103.7 273.2 103.7 273.1" className="st146" />
                          <path d="M103.7 273.2 104.5 273.2" className="st146" />
                          <path d="M103.4 272.9 103.5 272.8 104.6 272.7" className="st146" />
                          <path d="M123.1 225.8 123.2 225.8 123.3 225.8" className="st146" />
                          <path d="M122.9 227.9 124.7 227.7" className="st146" />
                          <path d="M122.9 227.9 124.7 227.7" className="st146" />
                          <path d="M110.3 227.1 110.1 227.2" className="st146" />
                          <path d="M110.3 227.1 110.4 227" className="st146" />
                          <path d="M110.1 227.2 109.1 228" className="st146" />
                          <path d="M108.9 228.4 108.9 228.3" className="st146" />
                          <path d="M108.9 228.4 108.8 228.8" className="st146" />
                          <path d="M108.9 228.3 109.1 228" className="st146" />
                          <path d="M110.4 227 110.3 227.1" className="st146" />
                          <path d="M108.8 228.8 108.9 229.2 108.9 229.4" className="st146" />
                          <path d="M122.3 226.2 122 226.2" className="st146" />
                          <path d="M122.3 226.2 119.4 226.4" className="st146" />
                          <path d="M125.2 225.7 123 226" className="st146" />
                          <path d="M123 226 122 226.2" className="st146" />
                          <path d="M119.4 226.4 112.7 226.6 110.6 226.8" className="st146" />
                          <path
                            d="M110.6 226.8 110.4 226.8 110.2 227 109.2 227.7 109.1 227.9"
                            className="st146"
                          />
                          <path d="M109.1 227.9 108.9 228.2 108.9 228.6" className="st146" />
                          <path d="M112.8 247.2 112.8 247" className="st146" />
                          <path d="M112.8 247.2 112.9 247.5 113.1 247.9" className="st146" />
                          <path d="M113.2 247.9 113.5 248.1" className="st146" />
                          <path d="M113.2 247.9 113.1 247.9" className="st146" />
                          <path d="M115 248.5 114.7 248.4" className="st146" />
                          <path d="M115 248.5 115.1 248.5" className="st146" />
                          <path d="M114.7 248.4 113.5 248.1" className="st146" />
                          <path d="M115.1 248.5 115 248.5" className="st146" />
                          <path d="M113.1 247.7 113.2 248.1 113.5 248.2" className="st146" />
                          <path d="M126.3 244.4 123.5 245.4" className="st146" />
                          <path d="M117.4 247.9 123.5 245.4" className="st146" />
                          <path d="M117.4 247.9 115.4 248.7" className="st146" />
                          <path
                            d="M115.4 248.7 115.2 248.7 114.9 248.6 113.7 248.3 113.5 248.2"
                            className="st146"
                          />
                          <path d="M125.3 234.9 124.2 229.6" className="st146" />
                          <path d="M124.2 227.8 124.6 227.7" className="st146" />
                          <path d="M124.2 227.8 124 228.1" className="st146" />
                          <path d="M124.2 229.6 124 228.1" className="st146" />
                          <path d="M108.6 230 108.7 229.4" className="st146" />
                          <path d="M108.6 230 109.5 234.5" className="st146" />
                          <path
                            d="M108.7 229.4 108.7 229.4 109.5 229.3 114.8 229"
                            className="st146"
                          />
                          <path d="M109.5 229.3 114.8 229" className="st146" />
                          <path d="M109.5 229.3 114.8 229" className="st146" />
                          <path d="M112.2 246.6 112.6 247" className="st146" />
                          <path d="M112.2 246.6 111.2 242.2" className="st146" />
                          <path d="M112.6 247 112.6 247 113.3 246.8" className="st146" />
                          <path d="M124 228.1 123.8 228.1" className="st146" />
                          <path d="M124.8 242.6 118.3 244.9 113.3 246.8" className="st146" />
                          <path d="M111.2 242.2 109.5 234.5" className="st146" />
                          <path d="M114.8 229 121.8 228.3 123.8 228.1" className="st146" />
                          <path d="M124.8 242.6 118.3 244.9" className="st146" />
                          <path d="M118.3 244.9 113.3 246.8" className="st146" />
                          <path d="M111.2 242.2 109.5 234.4" className="st146" />
                          <path d="M111.2 242.2 112.2 246.6" className="st146" />
                          <path d="M109.5 234.4 108.6 230" className="st146" />
                          <path d="M114.8 229 121.8 228.3" className="st146" />
                          <path d="M114.8 229 109.5 229.3" className="st146" />
                          <path d="M121.8 228.3 123.8 228.1" className="st146" />
                          <path d="M124.1 228.1 123.8 228.1" className="st146" />
                          <path d="M123.3 225.8 123.2 225.8 123.1 225.8" className="st146" />
                          <path d="M112.8 226.6 113.3 226.4 113.6 226.3" className="st146" />
                          <path d="M113.8 226.7 114.1 226.6" className="st146" />
                          <path d="M113.6 226.3 113.9 226.2" className="st146" />
                          <path d="M114 226.6 114.1 226.6" className="st146" />
                          <path d="M114 226.2 113.9 226.2" className="st146" />
                          <path
                            d="M114 226.2 114.4 226.2 122.8 225.8 123.5 225.8 124.1 225.8 124.7 225.8 124.9 225.8"
                            className="st146"
                          />
                          <path d="M117 248.1 118.1 248.1" className="st146" />
                          <path d="M118.1 247.7 118.4 247.6" className="st146" />
                          <path d="M118.1 248.1 118.3 248" className="st146" />
                          <path d="M118.4 247.6 118.6 247.5" className="st146" />
                          <path d="M118.3 248 118.7 247.9" className="st146" />
                          <path d="M118.6 247.6 118.6 247.5" className="st146" />
                          <path d="M118.6 247.6 119 247.4" className="st146" />
                          <path d="M118.8 247.9 118.7 247.9" className="st146" />
                          <path d="M118.8 247.9 119.1 247.8" className="st146" />
                          <path d="M119 247.4 126.7 244.3" className="st146" />
                          <path d="M119.1 247.8 126.9 244.6" className="st146" />
                          <path d="M123.2 225.8 123.6 225.8" className="st146" />
                          <path
                            d="M108.9 228.6 108.6 228.6 108.2 228.7 108 228.8 107.9 228.8 107.8 229"
                            className="st146"
                          />
                          <path d="M108.2 228.8 108.2 228.9" className="st146" />
                          <path d="M108.2 228.8 108.9 229" className="st146" />
                          <path d="M107.8 229 108 229.2 108.8 229.4" className="st146" />
                          <path
                            d="M113.1 247.9 112.8 247.9 112.4 248.1 112.2 248.1 112 248.1 112 247.9 112 247.9"
                            className="st146"
                          />
                          <path d="M112.3 247.9 112.3 247.9" className="st146" />
                          <path d="M112.3 248 112.9 247.5" className="st146" />
                          <path d="M112 247.9 112 247.7 112.8 247.1" className="st146" />
                          <path d="M82.6 258.8 79.9 260.8" className="st200" />
                          <path d="M94.9 244.5 94.8 244.5" className="st200" />
                          <path d="M97.3 253 94.7 254.3" className="st200" />
                          <path d="M94.6 244.2 75.2 253.8" className="st200" />
                          <path d="M95.2 255.3 82.9 259.4" className="st200" />
                          <path d="M34.6 138.5 36 140" className="st147" />
                          <path d="M30.6 138.5 36 144" className="st147" />
                          <path d="M28.7 140.7 36 148" className="st147" />
                          <path d="M28.7 144.7 36 152.1" className="st147" />
                          <path d="M28.7 148.7 36 156.1" className="st147" />
                          <path d="M28.7 152.8 36 160.2" className="st147" />
                          <path d="M28.7 156.8 36 164.2" className="st147" />
                          <path d="M28.7 160.8 36 168.2" className="st147" />
                          <path d="M28.7 164.9 36 172.3" className="st147" />
                          <path d="M28.7 168.9 36 176.3" className="st147" />
                          <path d="M28.7 172.9 36 180.4" className="st147" />
                          <path d="M28.7 177 36 184.4" className="st147" />
                          <path d="M28.7 181 36 188.4" className="st147" />
                          <path d="M28.7 185 36 192.5" className="st147" />
                          <path d="M28.7 189.1 36 196.5" className="st147" />
                          <path d="M28.7 193.1 36 200.5" className="st147" />
                          <path d="M28.7 197.1 36 204.6" className="st147" />
                          <path d="M28.7 201.2 36 208.6" className="st147" />
                          <path d="M28.7 205.2 36 212.6" className="st147" />
                          <path d="M28.7 209.3 36 216.7" className="st147" />
                          <path d="M28.7 213.3 36 220.7" className="st147" />
                          <path d="M28.7 217.3 36 224.7" className="st147" />
                          <path d="M28.7 221.4 36 228.8" className="st147" />
                          <path d="M28.7 225.4 34.8 231.6" className="st147" />
                          <path d="M28.7 229.5 30.8 231.6" className="st147" />
                          <path d="M33.6 138.5 36 140.9" className="st147" />
                          <path d="M29.6 138.5 36 144.9" className="st147" />
                          <path d="M28.7 141.6 36 149" className="st147" />
                          <path d="M28.7 145.7 36 153" className="st147" />
                          <path d="M28.7 149.7 36 157.1" className="st147" />
                          <path d="M28.7 153.7 36 161.1" className="st147" />
                          <path d="M28.7 157.8 36 165.1" className="st147" />
                          <path d="M28.7 161.8 36 169.2" className="st147" />
                          <path d="M28.7 165.9 36 173.2" className="st147" />
                          <path d="M28.7 169.9 36 177.3" className="st147" />
                          <path d="M28.7 173.9 36 181.3" className="st147" />
                          <path d="M28.7 178 36 185.3" className="st147" />
                          <path d="M28.7 182 36 189.4" className="st147" />
                          <path d="M28.7 186.1 36 193.4" className="st147" />
                          <path d="M28.7 190.1 36 197.5" className="st147" />
                          <path d="M28.7 194.1 36 201.5" className="st147" />
                          <path d="M28.7 198.2 36 205.5" className="st147" />
                          <path d="M28.7 202.2 36 209.6" className="st147" />
                          <path d="M28.7 206.3 36 213.6" className="st147" />
                          <path d="M28.7 210.3 36 217.7" className="st147" />
                          <path d="M28.7 214.3 36 221.7" className="st147" />
                          <path d="M28.7 218.4 36 225.7" className="st147" />
                          <path d="M28.7 222.4 36 229.8" className="st147" />
                          <path d="M28.7 226.4 33.9 231.6" className="st147" />
                          <path d="M28.7 230.5 29.8 231.6" className="st147" />
                          <path d="M128.8 134.8 121.4 142.2" className="st147" />
                          <path d="M124.7 134.8 117.4 142.2" className="st147" />
                          <path d="M120.7 134.8 113.3 142.2" className="st147" />
                          <path d="M116.7 134.8 109.3 142.2" className="st147" />
                          <path d="M112.6 134.8 105.2 142.2" className="st147" />
                          <path d="M108.6 134.8 101.2 142.2" className="st147" />
                          <path d="M104.6 134.8 97.2 142.2" className="st147" />
                          <path d="M100.5 134.8 93.1 142.2" className="st147" />
                          <path d="M96.5 134.8 89.1 142.2" className="st147" />
                          <path d="M92.5 134.8 85 142.2" className="st147" />
                          <path d="M88.4 134.8 81 142.2" className="st147" />
                          <path d="M84.4 134.8 77 142.2" className="st147" />
                          <path d="M80.4 134.8 72.9 142.2" className="st147" />
                          <path d="M76.3 134.8 68.9 142.2" className="st147" />
                          <path d="M72.3 134.8 64.9 142.2" className="st147" />
                          <path d="M68.3 134.8 60.8 142.2" className="st147" />
                          <path d="M64.2 134.8 56.8 142.2" className="st147" />
                          <path d="M60.2 134.8 52.8 142.2" className="st147" />
                          <path d="M56.1 134.8 48.7 142.2" className="st147" />
                          <path d="M52.1 134.8 44.7 142.2" className="st147" />
                          <path d="M48.1 134.8 40.6 142.2" className="st147" />
                          <path d="M44 134.8 36.6 142.2" className="st147" />
                          <path d="M40 134.8 36 138.8" className="st147" />
                          <path d="M131.9 134.8 124.5 142.2" className="st147" />
                          <path d="M127.8 134.8 120.5 142.2" className="st147" />
                          <path d="M123.8 134.8 116.4 142.2" className="st147" />
                          <path d="M119.7 134.8 112.4 142.2" className="st147" />
                          <path d="M115.7 134.8 108.3 142.2" className="st147" />
                          <path d="M111.7 134.8 104.3 142.2" className="st147" />
                          <path d="M107.6 134.8 100.3 142.2" className="st147" />
                          <path d="M103.6 134.8 96.2 142.2" className="st147" />
                          <path d="M99.5 134.8 92.2 142.2" className="st147" />
                          <path d="M95.5 134.8 88.1 142.2" className="st147" />
                          <path d="M91.5 134.8 84.1 142.2" className="st147" />
                          <path d="M87.4 134.8 80.1 142.2" className="st147" />
                          <path d="M83.4 134.8 76 142.2" className="st147" />
                          <path d="M79.3 134.8 72 142.2" className="st147" />
                          <path d="M75.3 134.8 67.9 142.2" className="st147" />
                          <path d="M71.3 134.8 63.9 142.2" className="st147" />
                          <path d="M67.2 134.8 59.9 142.2" className="st147" />
                          <path d="M63.2 134.8 55.8 142.2" className="st147" />
                          <path d="M59.1 134.8 51.8 142.2" className="st147" />
                          <path d="M55.1 134.8 47.7 142.2" className="st147" />
                          <path d="M51.1 134.8 43.7 142.2" className="st147" />
                          <path d="M47 134.8 39.7 142.2" className="st147" />
                          <path d="M43 134.8 36 141.8" className="st147" />
                          <path d="M39 134.8 36 137.8" className="st147" />
                          <path d="M120.7 175.3 120.4 175.3" className="st146" />
                          <path d="M120.7 175.3 120.7 175.2" className="st146" />
                          <path d="M120.4 175.3 119.3 176" className="st146" />
                          <path d="M119 176.3 119.1 176.2" className="st146" />
                          <path d="M119 176.3 119 176.8" className="st146" />
                          <path d="M119.1 176.2 119.3 176" className="st146" />
                          <path d="M120.7 175.2 120.7 175.3" className="st146" />
                          <path d="M119 176.8 119 177.1 119 177.3" className="st146" />
                          <path d="M129.7 176 123.1 175.2 121 175" className="st146" />
                          <path
                            d="M121 175 120.8 175 120.6 175.1 119.4 175.7 119.3 175.9"
                            className="st146"
                          />
                          <path d="M119.3 175.9 119.1 176.1 119 176.5" className="st146" />
                          <path d="M120 195.5 120 195.3" className="st146" />
                          <path d="M120 195.5 120.1 195.9 120.2 196.2" className="st146" />
                          <path d="M120.3 196.3 120.5 196.5" className="st146" />
                          <path d="M120.3 196.3 120.2 196.2" className="st146" />
                          <path d="M121.9 197.1 121.7 197" className="st146" />
                          <path d="M121.9 197.1 122 197.1" className="st146" />
                          <path d="M121.7 197 120.5 196.5" className="st146" />
                          <path d="M122 197.1 122 197.1" className="st146" />
                          <path d="M120.1 196 120.3 196.4 120.5 196.7" className="st146" />
                          <path d="M124.4 196.9 130.9 195.4" className="st146" />
                          <path d="M124.4 196.9 122.3 197.4" className="st146" />
                          <path
                            d="M122.3 197.4 122.1 197.4 121.8 197.2 120.7 196.7 120.5 196.7"
                            className="st146"
                          />
                          <path d="M118.5 177.8 118.7 177.3" className="st146" />
                          <path d="M118.5 177.8 118.7 182.4" className="st146" />
                          <path d="M118.8 177.3 118.7 177.3" className="st146" />
                          <path d="M118.8 177.3 119.5 177.3 124.8 177.8" className="st146" />
                          <path d="M119.5 177.3 124.9 177.8" className="st146" />
                          <path d="M119.5 177.3 124.8 177.8" className="st146" />
                          <path d="M119.4 194.8 119.8 195.3" className="st146" />
                          <path d="M119.4 194.8 119.2 190.3" className="st146" />
                          <path d="M119.8 195.3 119.8 195.3 120.5 195.2" className="st146" />
                          <path d="M132.6 192.9 125.8 194.1 120.5 195.2" className="st146" />
                          <path d="M119.2 190.3 118.7 182.4" className="st146" />
                          <path d="M125.8 194.1 120.5 195.2" className="st146" />
                          <path d="M119.2 190.3 118.8 182.4" className="st146" />
                          <path d="M119.2 190.3 119.4 194.8" className="st146" />
                          <path d="M118.8 182.4 118.5 177.8" className="st146" />
                          <path d="M124.9 177.8 119.5 177.3" className="st146" />
                          <path d="M123.2 175.2 123.8 175.1 124 175" className="st146" />
                          <path d="M124.1 175.4 124.5 175.4" className="st146" />
                          <path d="M124 175 124.4 175" className="st146" />
                          <path d="M124.4 175.4 124.5 175.4" className="st146" />
                          <path d="M124.5 175 124.4 175" className="st146" />
                          <path
                            d="M124.5 175 124.9 175.1 133.2 176 133.9 176.1 134.5 176.1 135.1 176.2 135.2 176.2"
                            className="st146"
                          />
                          <path d="M124 197 125 197.1" className="st146" />
                          <path
                            d="M119 176.5 118.8 176.5 118.4 176.5 118.1 176.5 117.9 176.6 117.9 176.8 117.9 176.8"
                            className="st146"
                          />
                          <path d="M118.3 176.7 118.3 176.7" className="st146" />
                          <path d="M118.2 176.7 119 177" className="st146" />
                          <path d="M117.9 176.8 118 177 118.8 177.3" className="st146" />
                          <path
                            d="M120.2 196.2 119.9 196.3 119.5 196.3 119.2 196.3 119.1 196.3"
                            className="st146"
                          />
                          <path d="M119.1 196.3 119 196.1 119 196.1" className="st146" />
                          <path d="M119.4 196.2 119.4 196.1" className="st146" />
                          <path d="M119.4 196.2 120.1 195.9" className="st146" />
                          <path d="M119 196.1 119 195.9 120 195.4" className="st146" />
                          <path d="M116 145.1 116.2 145 116.2 145" className="st146" />
                          <path
                            d="M121.1 143.9 121.1 143.8 121.2 143.7 121.4 143.2 121.5 142.8"
                            className="st146"
                          />
                          <path d="M121.5 142.6 121.5 142.8" className="st146" />
                          <path d="M121.5 142.6 121.5 142.6 122.2 143.4" className="st146" />
                          <path d="M122.4 143.7 124.3 145.8" className="st146" />
                          <path d="M130.7 154.1 129.1 151.9 124.3 145.8" className="st146" />
                          <path d="M116.9 147 118.3 146.1" className="st146" />
                          <path d="M116.9 147 118.3 146.1" className="st146" />
                          <path d="M105.1 151.9 105 152.1" className="st146" />
                          <path d="M105.1 151.9 105.2 151.7" className="st146" />
                          <path d="M105 152.1 104.4 153.2" className="st146" />
                          <path d="M104.4 153.7 104.4 153.6" className="st146" />
                          <path d="M104.4 153.7 104.6 154" className="st146" />
                          <path d="M104.4 153.6 104.4 153.2" className="st146" />
                          <path d="M105.2 151.7 105.2 151.8" className="st146" />
                          <path d="M104.6 154 104.8 154.3 104.9 154.5" className="st146" />
                          <path d="M115.5 145.8 115.3 146" className="st146" />
                          <path d="M115.5 145.8 113 147.2" className="st146" />
                          <path d="M117.9 144.1 116.1 145.3" className="st146" />
                          <path d="M117.9 144.1 119.3 143.2" className="st146" />
                          <path d="M116.1 145.3 115.3 146" className="st146" />
                          <path d="M113 147.2 107.1 150.4 105.2 151.5" className="st146" />
                          <path d="M120.9 142.4 120.1 142.8" className="st146" />
                          <path d="M120.9 142.4 120.9 142.4" className="st146" />
                          <path d="M120.1 142.8 119.3 143.2" className="st146" />
                          <path d="M120.9 142.4 121.5 142.4" className="st146" />
                          <path
                            d="M105.2 151.5 105.1 151.6 105 151.8 104.4 153 104.4 153.2"
                            className="st146"
                          />
                          <path d="M121.5 142.4 124.4 145.7" className="st146" />
                          <path d="M104.4 153.2 104.3 153.5 104.5 153.9" className="st146" />
                          <path d="M116.2 168.9 116 168.7" className="st146" />
                          <path d="M116.2 168.9 116.4 169.1 116.8 169.3" className="st146" />
                          <path d="M116.9 169.4 117.2 169.4" className="st146" />
                          <path d="M116.9 169.4 116.8 169.3" className="st146" />
                          <path d="M118.7 169.1 118.4 169.1" className="st146" />
                          <path d="M118.7 169.1 118.8 169.1" className="st146" />
                          <path d="M118.4 169.1 117.2 169.4" className="st146" />
                          <path d="M118.8 169.1 118.7 169.1" className="st146" />
                          <path d="M116.6 169.2 116.9 169.4 117.3 169.5" className="st146" />
                          <path d="M129.2 151.8 124.4 145.7" className="st146" />
                          <path d="M120.6 167.5 125 162.5" className="st146" />
                          <path d="M120.6 167.5 119.1 169.1" className="st146" />
                          <path
                            d="M119.1 169.1 119 169.1 118.7 169.2 117.5 169.5 117.3 169.5"
                            className="st146"
                          />
                          <path d="M122 152.3 125.6 156.8" className="st146" />
                          <path d="M122 152.3 118.7 148.1" className="st146" />
                          <path d="M117.9 146.4 118.2 146.1" className="st146" />
                          <path d="M117.9 146.4 117.9 146.7" className="st146" />
                          <path d="M118.2 146.1 118.5 145.9 119.8 144.9" className="st146" />
                          <path d="M121.5 143.6 121.4 143.6" className="st146" />
                          <path d="M121.5 143.6 121.6 143.7" className="st146" />
                          <path d="M118.7 148.1 117.9 146.8 117.9 146.7" className="st146" />
                          <path d="M119.8 144.9 121.1 143.9" className="st146" />
                          <path d="M121.4 143.6 121.1 143.9" className="st146" />
                          <path d="M121.6 143.7 121.5 143.7" className="st146" />
                          <path d="M104.8 155.3 104.7 154.7" className="st146" />
                          <path d="M104.8 155.3 107.6 158.8" className="st146" />
                          <path
                            d="M104.7 154.7 104.7 154.7 105.4 154.2 110.1 151.6"
                            className="st146"
                          />
                          <path d="M105.4 154.2 110.1 151.6" className="st146" />
                          <path d="M105.4 154.2 110.1 151.6" className="st146" />
                          <path d="M115.4 168.6 115.9 168.9" className="st146" />
                          <path d="M115.4 168.6 112.5 165" className="st146" />
                          <path d="M115.9 168.9 115.9 168.9 116.5 168.3" className="st146" />
                          <path d="M117.9 146.8 117.7 146.9" className="st146" />
                          <path d="M125 159.5 120.1 164.4 116.5 168.3" className="st146" />
                          <path d="M112.5 165 107.6 158.8" className="st146" />
                          <path d="M110.1 151.6 115.9 148 117.7 146.9" className="st146" />
                          <path d="M125 159.5 120.1 164.4" className="st146" />
                          <path d="M120.1 164.4 116.5 168.3" className="st146" />
                          <path d="M112.5 165 107.7 158.8" className="st146" />
                          <path d="M112.5 165 115.4 168.6" className="st146" />
                          <path d="M107.7 158.8 104.8 155.3" className="st146" />
                          <path d="M110.1 151.6 115.9 148" className="st146" />
                          <path d="M110.1 151.6 105.4 154.2" className="st146" />
                          <path d="M115.9 148 117.7 146.9" className="st146" />
                          <path d="M117.9 146.8 117.7 146.9" className="st146" />
                          <path d="M121.1 143.9 121.1 143.8" className="st146" />
                          <path d="M126.5 148.9 123.1 144.5" className="st146" />
                          <path d="M121.5 143.6 121.8 143.4" className="st146" />
                          <path d="M121.5 143.6 121.1 143.8" className="st146" />
                          <path d="M121.8 143.4 122.2 143.4" className="st146" />
                          <path d="M122 143.4 122.2 143.4" className="st146" />
                          <path d="M122 143.4 122.2 143.4" className="st146" />
                          <path d="M122.2 143.4 123.1 144.5" className="st146" />
                          <path d="M116.2 145 116.2 145 116 145.1" className="st146" />
                          <path d="M107.2 150.4 107.5 149.9 107.7 149.8" className="st146" />
                          <path d="M108.1 150 108.3 149.8" className="st146" />
                          <path d="M107.7 149.8 108 149.5" className="st146" />
                          <path d="M108.2 149.8 108.3 149.8" className="st146" />
                          <path d="M108.1 149.5 108 149.5" className="st146" />
                          <path
                            d="M108.1 149.5 108.4 149.3 115.8 145.3 116.4 144.9 117 144.7 117.5 144.3 117.6 144.3"
                            className="st146"
                          />
                          <path d="M120.3 167.8 121.3 167.3" className="st146" />
                          <path d="M121.1 166.9 121.3 166.8" className="st146" />
                          <path d="M121.3 167.3 121.5 167.2" className="st146" />
                          <path d="M121.3 166.8 121.5 166.6" className="st146" />
                          <path d="M121.5 167.2 121.8 167" className="st146" />
                          <path d="M121.5 166.7 121.5 166.6" className="st146" />
                          <path d="M121.5 166.7 121.8 166.4" className="st146" />
                          <path d="M121.8 166.9 121.8 167" className="st146" />
                          <path d="M121.8 166.9 122.1 166.6" className="st146" />
                          <path d="M121.8 166.4 127.4 160.1" className="st146" />
                          <path d="M122.1 166.6 127.7 160.4" className="st146" />
                          <path d="M116.2 145 116.5 144.9" className="st146" />
                          <path
                            d="M104.5 153.9 104.3 154 104 154.3 103.8 154.4 103.7 154.5 103.7 154.7 103.8 154.7"
                            className="st146"
                          />
                          <path d="M103.9 154.4 104 154.5" className="st146" />
                          <path d="M103.9 154.4 104.7 154.3" className="st146" />
                          <path d="M103.8 154.7 103.9 154.8" className="st146" />
                          <path d="M103.9 154.8 104.8 154.6" className="st146" />
                          <path
                            d="M116.7 169.3 116.6 169.5 116.2 169.8 116 170 115.9 170 115.8 169.9 115.7 169.9"
                            className="st146"
                          />
                          <path d="M116.1 169.8 116 169.7" className="st146" />
                          <path d="M116.1 169.8 116.4 169.1" className="st146" />
                          <path d="M115.7 169.9 115.7 169.7 116.1 168.8" className="st146" />
                          <path d="M101.9 178 94.8 183.3" className="st200" />
                          <path d="M82.6 177.2 80.3 178.9" className="st200" />
                          <path d="M94.7 182.9 82.7 188.9" className="st200" />
                          <path d="M96.6 171.8 94.7 172.7" className="st200" />
                          <path d="M95.2 173.7 82.9 177.8" className="st200" />
                          <path d="M126.8 292.7 123.2 296.3" className="st147" />
                          <path d="M122.8 292.7 119.2 296.3" className="st147" />
                          <path d="M118.8 292.7 115.2 296.3" className="st147" />
                          <path d="M114.7 292.7 111.1 296.3" className="st147" />
                          <path d="M110.7 292.7 107.1 296.3" className="st147" />
                          <path d="M106.6 292.7 103.1 296.3" className="st147" />
                          <path d="M102.6 292.7 99 296.3" className="st147" />
                          <path d="M98.6 292.7 95 296.3" className="st147" />
                          <path d="M94.5 292.7 91 296.3" className="st147" />
                          <path d="M90.5 292.7 86.9 296.3" className="st147" />
                          <path d="M86.4 292.7 82.9 296.3" className="st147" />
                          <path d="M82.4 292.7 78.9 296.3" className="st147" />
                          <path d="M78.4 292.7 74.8 296.3" className="st147" />
                          <path d="M74.3 292.7 70.8 296.3" className="st147" />
                          <path d="M70.3 292.7 66.8 296.3" className="st147" />
                          <path d="M66.2 292.7 62.7 296.3" className="st147" />
                          <path d="M62.2 292.7 58.7 296.3" className="st147" />
                          <path d="M58.2 292.7 54.7 296.3" className="st147" />
                          <path d="M54.1 292.7 50.6 296.3" className="st147" />
                          <path d="M50.1 292.7 46.6 296.3" className="st147" />
                          <path d="M46 292.7 42.5 296.3" className="st147" />
                          <path d="M42 292.7 38.5 296.3" className="st147" />
                          <path d="M38 292.7 36 294.6" className="st147" />
                          <path d="M125.8 292.7 122.3 296.3" className="st147" />
                          <path d="M121.8 292.7 118.3 296.3" className="st147" />
                          <path d="M117.7 292.7 114.2 296.3" className="st147" />
                          <path d="M113.7 292.7 110.2 296.3" className="st147" />
                          <path d="M109.7 292.7 106.1 296.3" className="st147" />
                          <path d="M105.6 292.7 102.1 296.3" className="st147" />
                          <path d="M101.6 292.7 98.1 296.3" className="st147" />
                          <path d="M97.6 292.7 94 296.3" className="st147" />
                          <path d="M93.5 292.7 90 296.3" className="st147" />
                          <path d="M89.5 292.7 85.9 296.3" className="st147" />
                          <path d="M85.4 292.7 81.9 296.3" className="st147" />
                          <path d="M81.4 292.7 77.9 296.3" className="st147" />
                          <path d="M77.4 292.7 73.8 296.3" className="st147" />
                          <path d="M73.3 292.7 69.8 296.3" className="st147" />
                          <path d="M69.3 292.7 65.7 296.3" className="st147" />
                          <path d="M65.3 292.7 61.7 296.3" className="st147" />
                          <path d="M61.2 292.7 57.7 296.3" className="st147" />
                          <path d="M57.2 292.7 53.6 296.3" className="st147" />
                          <path d="M53.2 292.7 49.6 296.3" className="st147" />
                          <path d="M49.1 292.7 45.5 296.3" className="st147" />
                          <path d="M45.1 292.7 41.5 296.3" className="st147" />
                          <path d="M41.1 292.7 37.5 296.3" className="st147" />
                          <path d="M37 292.7 36 293.7" className="st147" />
                          <path d="M37.5 142.2 39.6 144.3" className="st147" />
                          <path d="M36 144.8 39.6 148.3" className="st147" />
                          <path d="M36 148.8 39.6 152.3" className="st147" />
                          <path d="M36 152.8 39.6 156.4" className="st147" />
                          <path d="M36 156.9 39.6 160.4" className="st147" />
                          <path d="M36 160.9 39.6 164.4" className="st147" />
                          <path d="M36 165 39.6 168.5" className="st147" />
                          <path d="M36 169 39.6 172.5" className="st147" />
                          <path d="M36 173 39.6 176.5" className="st147" />
                          <path d="M36 177.1 39.6 180.6" className="st147" />
                          <path d="M36 181.1 39.6 184.6" className="st147" />
                          <path d="M36 185.2 39.6 188.7" className="st147" />
                          <path d="M36 189.2 39.6 192.7" className="st147" />
                          <path d="M36 193.2 39.6 196.7" className="st147" />
                          <path d="M36 197.3 39.6 200.8" className="st147" />
                          <path d="M36 201.3 39.6 204.8" className="st147" />
                          <path d="M36 205.4 39.6 208.9" className="st147" />
                          <path d="M36 209.4 39.6 212.9" className="st147" />
                          <path d="M36 213.4 39.6 216.9" className="st147" />
                          <path d="M36 217.5 39.6 221" className="st147" />
                          <path d="M36 221.5 39.6 225" className="st147" />
                          <path d="M36 225.6 39.6 229.1" className="st147" />
                          <path d="M36 229.6 39.6 233.1" className="st147" />
                          <path d="M36 233.6 39.6 237.1" className="st147" />
                          <path d="M36 237.7 39.6 241.2" className="st147" />
                          <path d="M36 241.7 39.6 245.2" className="st147" />
                          <path d="M36 245.8 39.6 249.3" className="st147" />
                          <path d="M36 249.8 39.6 253.3" className="st147" />
                          <path d="M36 253.8 39.6 257.3" className="st147" />
                          <path d="M36 257.9 39.6 261.4" className="st147" />
                          <path d="M36 261.9 39.6 265.4" className="st147" />
                          <path d="M36 265.9 39.6 269.5" className="st147" />
                          <path d="M36 270 39.6 273.5" className="st147" />
                          <path d="M36 274 39.6 277.5" className="st147" />
                          <path d="M36 278 39.6 281.6" className="st147" />
                          <path d="M36 282.1 39.6 285.6" className="st147" />
                          <path d="M36 286.1 39.6 289.7" className="st147" />
                          <path d="M36 290.1 38.6 292.7" className="st147" />
                          <path d="M36.6 142.2 39.6 145.3" className="st147" />
                          <path d="M36 145.8 39.6 149.3" className="st147" />
                          <path d="M36 149.8 39.6 153.3" className="st147" />
                          <path d="M36 153.8 39.6 157.4" className="st147" />
                          <path d="M36 157.9 39.6 161.4" className="st147" />
                          <path d="M36 161.9 39.6 165.5" className="st147" />
                          <path d="M36 165.9 39.6 169.5" className="st147" />
                          <path d="M36 170 39.6 173.5" className="st147" />
                          <path d="M36 174 39.6 177.6" className="st147" />
                          <path d="M36 178 39.6 181.6" className="st147" />
                          <path d="M36 182.1 39.6 185.7" className="st147" />
                          <path d="M36 186.1 39.6 189.7" className="st147" />
                          <path d="M36 190.1 39.6 193.7" className="st147" />
                          <path d="M36 194.2 39.6 197.8" className="st147" />
                          <path d="M36 198.2 39.6 201.8" className="st147" />
                          <path d="M36 206.3 39.6 209.9" className="st147" />
                          <path d="M36 210.3 39.6 213.9" className="st147" />
                          <path d="M36 214.4 39.6 217.9" className="st147" />
                          <path d="M36 218.4 39.6 222" className="st147" />
                          <path d="M36 222.5 39.6 226" className="st147" />
                          <path d="M36 226.5 39.6 230.1" className="st147" />
                          <path d="M36 230.5 39.6 234.1" className="st147" />
                          <path d="M36 234.6 39.6 238.1" className="st147" />
                          <path d="M36 238.6 39.6 242.2" className="st147" />
                          <path d="M36 242.7 39.6 246.2" className="st147" />
                          <path d="M36 246.7 39.6 250.2" className="st147" />
                          <path d="M36 250.7 39.6 254.3" className="st147" />
                          <path d="M36 254.8 39.6 258.3" className="st147" />
                          <path d="M36 258.8 39.6 262.3" className="st147" />
                          <path d="M36 262.9 39.6 266.4" className="st147" />
                          <path d="M36 266.9 39.6 270.4" className="st147" />
                          <path d="M36 270.9 39.6 274.4" className="st147" />
                          <path d="M36 275 39.6 278.5" className="st147" />
                          <path d="M36 279 39.6 282.5" className="st147" />
                          <path d="M36 283.1 39.6 286.6" className="st147" />
                          <path d="M36 287.1 39.6 290.6" className="st147" />
                          <path d="M36 291.1 37.6 292.7" className="st147" />
                          <path d="M104.6 152.6 104.6 142.8" className="st149" />
                          <path d="M123.9 245.4 123.9 245.3" className="st149" />
                          <path d="M123.9 164 123.9 163.8" className="st149" />
                          <path d="M123.9 145.1 123.9 142.8" className="st149" />
                          <path d="M47.5 187 48.6 187" className="st151" />
                          <path d="M54 190.3 54.9 190.3" className="st151" />
                          <path d="M41 193.5 42.1 193.5" className="st151" />
                          <path d="M50.8 193.5 51.9 193.5" className="st151" />
                          <path d="M44.3 196.8 45.3 196.8" className="st151" />
                          <path d="M47.5 200.1 48.6 200.1" className="st151" />
                          <path d="M44.3 203.3 45.3 203.3" className="st151" />
                          <path d="M54 203.3 55.1 203.3" className="st151" />
                          <path d="M41 206.6 42.1 206.6" className="st151" />
                          <path d="M47.5 209.9 48.6 209.9" className="st151" />
                          <path d="M44.3 213.1 45.3 213.1" className="st151" />
                          <path d="M50.8 213.1 51.9 213.1" className="st151" />
                          <path d="M54 216.4 55.1 216.4" className="st151" />
                          <path d="M41 219.6 42.1 219.6" className="st151" />
                          <path d="M50.8 219.6 51.9 219.6" className="st151" />
                          <path d="M47.5 222.9 48.6 222.9" className="st151" />
                          <path d="M54 226.2 55.1 226.2" className="st151" />
                          <path d="M41 229.4 42.1 229.4" className="st151" />
                          <path d="M50.8 229.4 51.9 229.4" className="st151" />
                          <path d="M44.3 232.7 45.3 232.7" className="st151" />
                          <path d="M47.5 236 48.6 236" className="st151" />
                          <path d="M44.3 239.2 45.3 239.2" className="st151" />
                          <path d="M54 239.2 55.1 239.2" className="st151" />
                          <path d="M41 242.5 42.1 242.5" className="st151" />
                          <path d="M47.5 245.8 48.6 245.8" className="st151" />
                          <path d="M44.3 249 45.3 249" className="st151" />
                          <path d="M50.8 249 51.9 249" className="st151" />
                          <path d="M41.1 245.2 40.6 244.3" className="st151" />
                          <path d="M47.2 249.2 46.6 248.3" className="st151" />
                          <path d="M48.4 244.8 47.9 243.9" className="st151" />
                          <path d="M43.5 236.3 43 235.4" className="st151" />
                          <path d="M52.9 246 52.3 245.1" className="st151" />
                          <path d="M48 237.5 47.4 236.6" className="st151" />
                          <path d="M47.5 230.3 47 229.3" className="st151" />
                          <path d="M42.6 221.8 42.1 220.8" className="st151" />
                          <path d="M52 231.4 51.5 230.5" className="st151" />
                          <path d="M48.7 225.8 48.2 224.8" className="st151" />
                          <path d="M40.6 211.6 40 210.7" className="st151" />
                          <path d="M49.9 221.3 49.4 220.4" className="st151" />
                          <path d="M45 212.9 44.5 211.9" className="st151" />
                          <path d="M40.1 204.4 39.6 203.4" className="st151" />
                          <path d="M54.4 222.5 53.8 221.6" className="st151" />
                          <path d="M49.5 214 48.9 213.1" className="st151" />
                          <path d="M39.7 197.1 39.6 196.9" className="st151" />
                          <path d="M49 206.7 48.5 205.8" className="st151" />
                          <path d="M44.1 198.2 43.6 197.4" className="st151" />
                          <path d="M40.9 192.6 40.3 191.7" className="st151" />
                          <path d="M53.5 208 53 207" className="st151" />
                          <path d="M50.2 202.3 49.7 201.4" className="st151" />
                          <path d="M42.1 188.2 41.5 187.2" className="st151" />
                          <path d="M51.5 197.8 50.9 196.9" className="st151" />
                          <path d="M46.6 189.3 46 188.4" className="st151" />
                          <path d="M55.7 198.7 55.3 198.1" className="st151" />
                          <path d="M51 190.6 50.4 189.6" className="st151" />
                          <path d="M55.5 240.5 54.9 241.5" className="st151" />
                          <path d="M50.6 249 50 250" className="st151" />
                          <path d="M54.3 236.1 53.8 237" className="st151" />
                          <path d="M48.2 240.1 47.7 241" className="st151" />
                          <path d="M43.3 248.5 42.8 249.5" className="st151" />
                          <path d="M51.9 227.1 51.4 228.1" className="st151" />
                          <path d="M47 235.6 46.5 236.6" className="st151" />
                          <path d="M43.8 241.3 43.2 242.2" className="st151" />
                          <path d="M55.6 214.2 55.1 215.2" className="st151" />
                          <path d="M50.7 222.7 50.2 223.7" className="st151" />
                          <path d="M47.4 228.4 46.9 229.3" className="st151" />
                          <path d="M54.5 209.8 53.9 210.7" className="st151" />
                          <path d="M51.2 215.4 50.6 216.3" className="st151" />
                          <path d="M43 229.6 42.5 230.5" className="st151" />
                          <path d="M54.9 202.4 54.3 203.4" className="st151" />
                          <path d="M46.7 216.6 46.2 217.5" className="st151" />
                          <path d="M41.8 225.1 41.3 226" className="st151" />
                          <path d="M50.4 203.7 49.8 204.6" className="st151" />
                          <path d="M45.5 212.2 44.9 213.1" className="st151" />
                          <path d="M40.6 220.6 40 221.6" className="st151" />
                          <path d="M54.1 190.8 53.6 191.7" className="st151" />
                          <path d="M49.2 199.2 48.7 200.1" className="st151" />
                          <path d="M44.3 207.7 43.8 208.6" className="st151" />
                          <path d="M52.5 187 52.3 187.2" className="st151" />
                          <path d="M48 194.8 47.4 195.7" className="st151" />
                          <path d="M41.9 198.8 41.4 199.7" className="st151" />
                          <path d="M45.6 185.9 45.1 186.8" className="st151" />
                          <path d="M40.7 194.3 40.2 195.2" className="st151" />
                          <path d="M41.2 187 40.6 188" className="st151" />
                          <path d="M31.3 133.8 28.7 131.1" className="st148" />
                          <path d="M681.6 34.3 28 34.3" className="st151" />
                          <path d="M36 567.8 36 477.4" className="st152" />
                          <path d="M36 470 36 431.4" className="st152" />
                          <path d="M36 424.1 36 328.4" className="st152" />
                          <path d="M36 324.8 36 296.3" className="st152" />
                          <path d="M36 292.7 36 231.6" className="st152" />
                          <path d="M28.7 231.6 28.7 567.8" className="st152" />
                          <path d="M36 328.4 36 324.8" className="st151" />
                          <path d="M36 231.6 28.7 231.6" className="st151" />
                          <path d="M28.7 575.2 517.8 575.2 517.8 567.8" className="st152" />
                          <path d="M193 567.8 36 567.8" className="st152" />
                          <path d="M28.7 567.8 28.7 575.2" className="st152" />
                          <path d="M36 324.8 36 328.4" className="st155" />
                          <path d="M28.7 133.8 28.7 138.5" className="st152" />
                          <path d="M36 134.8 36 133.8 28.7 133.8" className="st152" />
                          <path d="M28.7 138.5 36 138.5 36 134.8" className="st151" />
                          <path
                            d="M97.3 253 97.4 250.9 97.1 248.9 96.5 246.9 95.4 245.1 94.1 243.5 92.5 242.2 90.7 241.2 88.7 240.5 86.7 240.2 84.6 240.4 82.5 240.9 80.7 241.7 78.9 242.9 77.5 244.3 76.3 246.1 75.5 247.9 75 250 74.9 252.1 75.3 254.1 75.9 256.1 76.9 257.9 78.2 259.5 79.9 260.8 81.6 261.8 83.6 262.5 85.7 262.7 87.8 262.6 89.8 262.1 91.7 261.3 93.4 260.1 94.8 258.7 96 256.9 96.9 255 97.3 253 96.9 255 96 256.9 94.8 258.7 93.4 260.1 91.7 261.3 89.8 262.1 87.8 262.6 85.7 262.7 83.6 262.5 81.6 261.8 79.9 260.8 78.2 259.5 76.9 257.9 75.9 256.1 75.3 254.1 74.9 252.1 75 250 75.5 247.9 76.3 246.1 77.5 244.3 78.9 242.9 80.7 241.7 82.5 240.9 84.6 240.4 86.7 240.2 88.7 240.5 90.7 241.2 92.5 242.2"
                            className="st151"
                          />
                          <path
                            d="M92.5 242.2 94.1 243.5 95.4 245.1 96.5 246.9 97.1 248.9 97.4 250.9 97.3 253"
                            className="st151"
                          />
                          <path
                            d="M75.1 250 75.5 248 76.4 246.1 77.6 244.4 79 242.9 80.7 241.7 82.6 240.9 84.6 240.5 86.7 240.3 88.7 240.6 90.6 241.3 92.5 242.3 94 243.6 95.4 245.1 96.4 247 97 248.9 97.3 250.9 97.2 253 96.8 255 95.9 256.9 94.8 258.6 93.3 260.1 91.6 261.3 89.7 262.1 87.8 262.5 85.7 262.7 83.6 262.4 81.7 261.7 79.9 260.7 78.3 259.4 77 257.9 75.9 256 75.3 254.1 75 252.1 75.1 250"
                            className="st151"
                          />
                          <path
                            d="M75 250 74.9 252.1 75.3 254.1 75.9 256.1 76.9 257.9 78.2 259.5 79.9 260.8 81.6 261.8 83.6 262.5 85.7 262.7 87.8 262.6 89.8 262.1 91.7 261.3 93.4 260.1 94.8 258.7 96 256.9 96.9 255 97.3 253 97.4 250.9 97.1 248.9 96.5 246.9 95.4 245.1 94.1 243.5 92.5 242.2 90.7 241.2 88.7 240.5"
                            className="st151"
                          />
                          <path
                            d="M88.7 240.5 86.7 240.2 84.6 240.4 82.5 240.9 80.7 241.7 78.9 242.9 77.5 244.3 76.3 246.1 75.5 247.9 75 250 75.5 247.9 76.3 246.1 77.5 244.3 78.9 242.9 80.7 241.7 82.5 240.9 84.6 240.4 86.7 240.2 88.7 240.5 90.7 241.2 92.5 242.2"
                            className="st151"
                          />
                          <path
                            d="M92.5 242.2 94.1 243.5 95.4 245.1 96.5 246.9 97.1 248.9 97.4 250.9 97.3 253 96.9 255 96 256.9 94.8 258.7 93.4 260.1 91.7 261.3 89.8 262.1 87.8 262.6 85.7 262.7 83.6 262.5 81.6 261.8 79.9 260.8 78.2 259.5 76.9 257.9 75.9 256.1 75.3 254.1 74.9 252.1 75 250 74.9 252.1 75.3 254.1 75.9 256.1 76.9 257.9 78.2 259.5 79.9 260.8 81.6 261.8 83.6 262.5 85.7 262.7 87.8 262.6 89.8 262.1 91.7 261.3 93.4 260.1 94.8 258.7 96 256.9 96.9 255 97.3 253 97.4 250.9 97.1 248.9 96.5 246.9 95.4 245.1 94.1 243.5 92.5 242.2"
                            className="st151"
                          />
                          <path
                            d="M92.5 242.2 90.7 241.2 88.7 240.5 86.7 240.2 84.6 240.4 82.5 240.9 80.7 241.7 78.9 242.9 77.5 244.3 76.3 246.1 75.5 247.9 75 250 75.5 247.9 76.3 246.1 77.5 244.3 78.9 242.9 80.7 241.7 82.5 240.9 84.6 240.4 86.7 240.2 88.7 240.5 90.7 241.2 92.5 242.2"
                            className="st151"
                          />
                          <path
                            d="M92.5 242.2 94.1 243.5 95.4 245.1 96.5 246.9 97.1 248.9 97.4 250.9 97.3 253 96.9 255 96 256.9 94.8 258.7 93.4 260.1 91.7 261.3 89.8 262.1 87.8 262.6 85.7 262.7 83.6 262.5 81.6 261.8 79.9 260.8 78.2 259.5 76.9 257.9 75.9 256.1 75.3 254.1 74.9 252.1 75 250"
                            className="st151"
                          />
                          <path d="M106.7 34.3 106.7 37.9" className="st152" />
                          <path
                            d="M106.7 45.2 114.1 45.2 114.1 34.3 106.7 34.3"
                            className="st152"
                          />
                          <path d="M106.7 37.9 28.5 37.9 28.5 45.2 106.7 45.2" className="st152" />
                          <path d="M36 231.6 36 142.2" className="st152" />
                          <path d="M28.7 138.5 28.7 231.6" className="st152" />
                          <path d="M36 138.5 28.7 138.5" className="st151" />
                          <path d="M28.7 231.6 36 231.6" className="st151" />
                          <path
                            d="M39.6 142.2 140.2 142.2 140.2 134.8 36 134.8"
                            className="st152"
                          />
                          <path d="M36 134.8 36 138.5" className="st151" />
                          <path d="M120.7 142.2 119.8 142.8" className="st151" />
                          <path d="M122.7 142.8 122.3 142.2" className="st151" />
                          <path
                            d="M101.9 178.1 101.1 176.2 99.9 174.5 98.4 173 96.7 171.9 94.8 171 92.8 170.5 90.8 170.4 88.7 170.6 86.7 171.3 84.9 172.3 83.3 173.6 82 175.3 81 177 80.3 179 80 181 80.1 183.1 80.6 185.1 81.4 187 82.5 188.8 84 190.2"
                            className="st151"
                          />
                          <path
                            d="M84 190.2 85.7 191.4 87.6 192.3 89.6 192.7 91.7 192.9 93.7 192.6 95.7 191.9 97.6 190.9 99.1 189.6 100.5 188 101.5 186.2 102.2 184.2 102.4 182.2 102.4 180.2 101.9 178.1 102.4 180.2 102.4 182.2 102.2 184.2 101.5 186.2 100.5 188 99.1 189.6 97.6 190.9 95.7 191.9 93.7 192.6 91.7 192.9 89.6 192.7 87.6 192.3 85.7 191.4 84 190.2 82.5 188.8 81.4 187 80.6 185.1 80.1 183.1 80 181 80.3 179 81 177 82 175.3 83.3 173.6 84.9 172.3 86.7 171.3 88.7 170.6 90.8 170.4 92.8 170.5 94.8 171 96.7 171.9 98.4 173 99.9 174.5 101.1 176.2 101.9 178.1"
                            className="st151"
                          />
                          <path
                            d="M80.6 185.1 80.1 183.1 80.1 181 80.4 179 81 177.1 82.1 175.3 83.3 173.7 85 172.4 86.7 171.4 88.7 170.7 90.8 170.4 92.8 170.6 94.8 171 96.7 171.9 98.4 173.1 99.9 174.5 101 176.2 101.8 178.1 102.3 180.2 102.4 182.2 102.1 184.2 101.4 186.2 100.4 188 99.1 189.5 97.5 190.9 95.7 191.8 93.7 192.5 91.7 192.8 89.6 192.7 87.6 192.2 85.7 191.4 84 190.2 82.6 188.7 81.4 187 80.6 185.1"
                            className="st151"
                          />
                          <path
                            d="M80.6 185.1 81.4 187 82.5 188.8 84 190.2 85.7 191.4 87.6 192.3 89.6 192.7 91.7 192.9 93.7 192.6 95.7 191.9 97.6 190.9 99.1 189.6 100.5 188 101.5 186.2 102.2 184.2 102.4 182.2 102.4 180.2 101.9 178.1 101.1 176.2 99.9 174.5 98.4 173 96.7 171.9 94.8 171 92.8 170.5 90.8 170.4 88.7 170.6 86.7 171.3 84.9 172.3 83.3 173.6 82 175.3 81 177 80.3 179 80 181 80.1 183.1 80.6 185.1 80.1 183.1 80 181 80.3 179 81 177 82 175.3 83.3 173.6 84.9 172.3 86.7 171.3 88.7 170.6 90.8 170.4 92.8 170.5 94.8 171 96.7 171.9 98.4 173 99.9 174.5 101.1 176.2 101.9 178.1 102.4 180.2 102.4 182.2 102.2 184.2 101.5 186.2 100.5 188 99.1 189.6 97.6 190.9 95.7 191.9 93.7 192.6 91.7 192.9 89.6 192.7 87.6 192.3 85.7 191.4 84 190.2 82.5 188.8 81.4 187 80.6 185.1 81.4 187 82.5 188.8 84 190.2 85.7 191.4 87.6 192.3 89.6 192.7 91.7 192.9 93.7 192.6 95.7 191.9 97.6 190.9 99.1 189.6 100.5 188 101.5 186.2 102.2 184.2 102.4 182.2 102.4 180.2 101.9 178.1 101.1 176.2 99.9 174.5 98.4 173 96.7 171.9 94.8 171 92.8 170.5 90.8 170.4 88.7 170.6 86.7 171.3 84.9 172.3 83.3 173.6 82 175.3 81 177 80.3 179 80 181 80.1 183.1 80.6 185.1 80.1 183.1 80 181 80.3 179 81 177 82 175.3 83.3 173.6 84.9 172.3 86.7 171.3 88.7 170.6 90.8 170.4 92.8 170.5 94.8 171 96.7 171.9 98.4 173 99.9 174.5 101.1 176.2"
                            className="st151"
                          />
                          <path
                            d="M101.1 176.2 101.9 178.1 102.4 180.2 102.4 182.2 102.2 184.2 101.5 186.2 100.5 188 99.1 189.6 97.6 190.9 95.7 191.9 93.7 192.6 91.7 192.9 89.6 192.7 87.6 192.3 85.7 191.4 84 190.2 82.5 188.8 81.4 187 80.6 185.1"
                            className="st151"
                          />
                          <path d="M36 296.3 133.3 296.3" className="st152" />
                          <path d="M136.8 296.3 136.8 292.7 39.6 292.7" className="st152" />
                          <path d="M36 292.7 36 296.3" className="st151" />
                          <path d="M39.6 292.7 39.6 142.2" className="st152" />
                          <path d="M36 142.2 36 292.7" className="st152" />
                          <path d="M39.6 142.2 36 142.2" className="st151" />
                          <path d="M332.2 142.8 121.8 142.8" className="st151" />
                          <path d="M120.2 142.8 40 142.8 40 158.2 39.6 158.2" className="st151" />
                          <path
                            d="M39.6 184.5 46.1 184.5 47.9 184.7 49.8 185.2 51.5 186.1 52.9 187.3 54.1 188.8 55 190.4 55.5 192.3 55.7 194.2 55.7 242.3 55.5 244.2 55 246 54.1 247.7 52.9 249.2 51.5 250.3 49.8 251.2 47.9 251.7"
                            className="st151"
                          />
                          <path d="M47.9 251.7 46.1 251.9 39.6 251.9" className="st151" />
                          <path d="M39.6 280.3 39.6 292.7" className="st151" />
                          <path d="M50.5 292.7 136.8 292.7 136.8 425.4" className="st151" />
                          <path d="M46.1 184.5 39.6 184.5" className="st151" />
                          <path
                            d="M39.6 251.9 46.1 251.9 47.9 251.7 49.8 251.2 51.5 250.3 52.9 249.2 54.1 247.7 55 246 55.5 244.2 55.7 242.3 55.7 194.2 55.5 192.3 55 190.4 54.1 188.8 52.9 187.3 51.5 186.1 49.8 185.2 47.9 184.7 46.1 184.5"
                            className="st151"
                          />
                          <path d="M189.3 133.8 36 133.8" className="st151" />
                          <path d="M28.7 133.8 28.7 45.2" className="st151" />
                          <path d="M114.1 45.2 187.4 45.2" className="st151" />
                          <path
                            d="M199.1 45.2 28.7 45.2 28.7 133.8 189.3 133.8"
                            className="st151"
                          />
                          <path d="M123.9 232 122.6 230.2 122.4 230" className="st151" />
                          <path d="M121 228.6 119.6 227.3 119.2 226.9" className="st151" />
                          <path d="M117.7 225.8 116.3 224.7 115.6 224.3" className="st151" />
                          <path d="M113.9 223.4 112.7 222.7 111.7 222.2" className="st151" />
                          <path d="M110 221.6 108.9 221.1 107.6 220.7" className="st151" />
                          <path d="M105.8 220.3 104.9 220 103.3 219.8" className="st151" />
                          <path d="M101.4 219.5 100.8 219.4 98.9 219.4" className="st151" />
                          <path d="M97 219.4 96.7 219.4 94.5 219.6" className="st151" />
                          <path d="M92.7 219.9 92.5 219.9 90.2 220.5" className="st151" />
                          <path d="M88.4 220.9 86 221.9" className="st151" />
                          <path d="M84.3 222.6 82.1 223.8" className="st151" />
                          <path d="M80.5 224.8 78.4 226.3" className="st151" />
                          <path d="M77 227.5 75.2 229.2" className="st151" />
                          <path d="M73.9 230.7 72.3 232.6" className="st151" />
                          <path d="M71.3 234.2 70 236.3" className="st151" />
                          <path d="M69.2 238.1 68.2 240.2 68.2 240.3" className="st151" />
                          <path d="M67.6 242.2 67 244.1 66.9 244.6" className="st151" />
                          <path d="M66.6 246.4 66.3 248.2 66.3 248.9" className="st151" />
                          <path d="M66.1 250.8 66.1 252.3 66.2 253.3" className="st151" />
                          <path d="M66.3 255.2 66.5 256.5 66.8 257.7" className="st151" />
                          <path d="M67.2 259.6 67.4 260.5 67.8 261.9" className="st151" />
                          <path d="M68.5 263.7 68.7 264.4 69.5 266" className="st151" />
                          <path d="M70.4 267.7 70.6 268.1 71.8 269.8" className="st151" />
                          <path d="M72.9 271.4 72.9 271.5 74.5 273.3" className="st151" />
                          <path d="M75.8 274.6 77.7 276.3" className="st151" />
                          <path d="M79.1 277.5 81.2 278.9" className="st151" />
                          <path d="M82.8 279.9 85.1 281" className="st151" />
                          <path d="M86.8 281.7 89.2 282.5" className="st151" />
                          <path d="M91 283 93.5 283.6" className="st151" />
                          <path d="M95.4 283.8 97.9 283.9" className="st151" />
                          <path d="M99.8 283.8 102.2 283.7 102.3 283.7" className="st151" />
                          <path d="M104.1 283.3 106.3 282.9 106.6 282.9" className="st151" />
                          <path d="M108.4 282.3 110.2 281.7 110.8 281.4" className="st151" />
                          <path d="M112.5 280.6 113.9 279.9 114.8 279.5" className="st151" />
                          <path d="M116.3 278.5 117.5 277.7 118.4 277" className="st151" />
                          <path d="M119.8 275.7 120.7 275.1 121.6 274" className="st151" />
                          <path d="M122.9 272.6 123.5 272.1 124.5 270.6" className="st151" />
                          <path d="M55.7 197.4 55.7 212" className="st156" />
                          <path d="M55.7 224.8 55.7 239.4" className="st156" />
                          <path d="M35.6 184.5 46.1 184.5" className="st151" />
                          <path d="M35.6 251.9 46.1 251.9" className="st151" />
                          <path d="M55.7 194.2 55.7 242.3" className="st151" />
                          <path
                            d="M46.1 251.9 48.2 251.7 50.2 251 52.1 249.8 53.6 248.3 54.8 246.5 55.5 244.5 55.7 242.3"
                            className="st151"
                          />
                          <path
                            d="M46.1 184.5 48.2 184.8 50.2 185.5 52.1 186.6 53.6 188.1 54.8 189.9 55.5 192 55.7 194.2"
                            className="st151"
                          />
                          <path d="M124.7 166.5 123.5 164.2" className="st151" />
                          <path d="M122.6 162.6 121.1 160.5" className="st151" />
                          <path d="M119.9 159.1 118.2 157.2" className="st151" />
                          <path d="M116.9 155.9 115 154.3" className="st151" />
                          <path d="M113.4 153.2 111.3 151.8" className="st151" />
                          <path d="M109.6 151 107.5 150 107.3 149.9" className="st151" />
                          <path d="M105.5 149.3 103.7 148.7 103.1 148.5" className="st151" />
                          <path d="M101.3 148.2 99.6 147.9 98.8 147.8" className="st151" />
                          <path d="M96.9 147.7 95.4 147.6 94.4 147.7" className="st151" />
                          <path d="M92.5 147.7 91.4 147.8 90 148.1" className="st151" />
                          <path d="M88.2 148.4 87.3 148.6 85.7 149.1" className="st151" />
                          <path d="M84 149.7 83.3 149.9 81.6 150.7" className="st151" />
                          <path d="M79.9 151.5 79.6 151.7 77.8 152.8" className="st151" />
                          <path d="M76.2 153.8 76.1 153.9 74.2 155.5" className="st151" />
                          <path d="M72.8 156.7 71.1 158.5" className="st151" />
                          <path d="M69.9 160 68.5 162" className="st151" />
                          <path d="M67.4 163.6 66.3 165.9" className="st151" />
                          <path d="M65.5 167.6 64.6 170" className="st151" />
                          <path d="M64.1 171.7 63.5 174.2" className="st151" />
                          <path d="M63.3 176.1 63 178.6" className="st151" />
                          <path d="M63.1 180.5 63.2 182.8 63.2 183" className="st151" />
                          <path d="M63.4 184.8 63.8 186.9 63.9 187.4" className="st151" />
                          <path d="M64.4 189.1 64.9 190.9 65.2 191.5" className="st151" />
                          <path d="M65.9 193.3 66.6 194.7 67.1 195.5" className="st151" />
                          <path d="M68 197.1 68.7 198.2 69.5 199.2" className="st151" />
                          <path d="M70.6 200.7 71.2 201.5 72.4 202.5" className="st151" />
                          <path d="M73.7 203.9 74.2 204.4 75.7 205.4" className="st151" />
                          <path d="M77.2 206.6 77.6 206.9 79.3 207.9" className="st151" />
                          <path d="M81 208.8 81.1 208.9 83.3 209.8" className="st151" />
                          <path d="M85 210.5 87.5 211.2" className="st151" />
                          <path d="M89.3 211.6 91.8 212" className="st151" />
                          <path d="M93.7 212.1 96.2 212.1" className="st151" />
                          <path d="M98.1 212 100.6 211.7" className="st151" />
                          <path d="M102.4 211.4 104.9 210.7" className="st151" />
                          <path d="M106.7 210.1 109 209.1" className="st151" />
                          <path d="M110.7 208.2 112.8 207.1 112.8 207" className="st151" />
                          <path d="M114.3 205.8 116.1 204.6 116.4 204.4" className="st151" />
                          <path d="M117.7 203 119.1 201.7 119.5 201.2" className="st151" />
                          <path d="M120.7 199.7 121.7 198.5 122.2 197.8" className="st151" />
                          <path d="M123.2 196.1 123.9 195 124.3 193.9" className="st151" />
                          <path d="M29.4 132.8 29.4 127.1" className="st157" />
                          <path d="M29.4 122.3 29.4 112.6" className="st157" />
                          <path d="M29.4 107.8 29.4 98.2" className="st157" />
                          <path d="M29.4 93.3 29.4 83.8" className="st157" />
                          <path d="M29.4 78.9 29.4 69.3" className="st157" />
                          <path d="M29.4 64.4 29.4 54.8" className="st157" />
                          <path d="M29.4 50 29.4 44.3 39.4 44.3" className="st157" />
                          <path d="M44.2 44.3 53.8 44.3" className="st157" />
                          <path d="M58.7 44.3 68.3 44.3" className="st157" />
                          <path d="M73.1 44.3 82.7 44.3" className="st157" />
                          <path d="M87.6 44.3 97.2 44.3" className="st157" />
                          <path d="M102 44.3 111.6 44.3" className="st157" />
                          <path d="M116.4 44.3 126.1 44.3" className="st157" />
                          <path d="M68.5 296.3 71.6 296.3" className="st151" />
                          <text transform="matrix(1 0 0 1.0012 62.096 207.478)">
                            <tspan x={0} y={0} className="st161 st201">
                              {"C"}
                            </tspan>
                            <tspan x={5.3} y={0} className="st161 st201">
                              {"O"}
                            </tspan>
                            <tspan x={11.1} y={0} className="st161 st201">
                              {"F"}
                            </tspan>
                            <tspan x={14.2} y={0} className="st161 st201">
                              {"F"}
                            </tspan>
                            <tspan x={17.4} y={0} className="st161 st201">
                              {"E"}
                            </tspan>
                            <tspan x={21.1} y={0} className="st161 st201">
                              {"E"}
                            </tspan>
                            <tspan x={24.7} y={0} className="st161 st201">
                              {" LO"}
                            </tspan>
                            <tspan x={35.3} y={0} className="st161 st201">
                              {"U"}
                            </tspan>
                            <tspan x={39.6} y={0} className="st161 st201">
                              {"N"}
                            </tspan>
                            <tspan x={44.7} y={0} className="st161 st201">
                              {"G"}
                            </tspan>
                            <tspan x={50.4} y={0} className="st161 st201">
                              {"E"}
                            </tspan>
                            <tspan x={54} y={0} className="st161 st201" />
                            <tspan x={55.9} y={0} className="st161 st201">
                              {"A"}
                            </tspan>
                            <tspan x={61} y={0} className="st161 st201">
                              {"R"}
                            </tspan>
                            <tspan x={65.1} y={0} className="st161 st201">
                              {"E"}
                            </tspan>
                            <tspan x={68.7} y={0} className="st161 st201">
                              {"A"}
                            </tspan>
                          </text>
                          <text className="st164 st165" transform="rotate(-90 141.297 92.645)">
                            {"FIRE PLACE"}
                          </text>
                          <text transform="translate(529.6 544.034)">
                            <tspan x={0} y={0} className="st164 st166">
                              {"FREE"}
                            </tspan>
                            <tspan x={-7.5} y={5.7} className="st164 st166">
                              {"STANDING"}
                            </tspan>
                            <tspan x={-1} y={11.3} className="st164 st166">
                              {"POTS"}
                            </tspan>
                          </text>
                          <text className="st164 st202" transform="rotate(-90 403.894 -288.445)">
                            {"NEW PLANTER"}
                          </text>
                          <text className="st164 st202" transform="rotate(-90 470.795 -220.873)">
                            {"NEW PLANTER"}
                          </text>
                          <path d="M300.6 343c.2-.6.1-1.4.1-2v-.5c0-.2.2-.9.5-1.8l.1-.3c.5-1.7 1-3.3 1.4-4.9.2 2.3-.2 5.1-.2 5.2h.3v-.1c0-.2.6-3.1.1-6 .4-2 .5-3.6-.1-4.3-.3-.4-.7-.7-1.1-.9.8.3 1.3.5 1.3.5l.4.2-.1-.4s-1.4-3.5-6.9-3.4c-5.6 0-6.3 3.1-6.4 3.2l-.1.3.3-.1s1.7-.6 3.6-1.1c-.9.3-1.7.8-2.3 1.5-.8.8-1.3 1.9-1.6 2.9-.5.7-.9 1.3-1 1.8-.1.4.1.8.4 1.3-.2 2.3.1 4.4.1 4.4h.3c0-.1-.2-2.2-.1-4 .7 1 1.9 2.1 2.8 3 .3.3.6.5.7.7l.3.3c.2.2.3.5.4.8.1.4.3.7.5 1 .5.5 1.5.5 1.6.5h.3l-.2-.2s-.5-.6-.6-1c-.1-.3-.1-.6-.1-.8l1.2.6-1.3-2.1-1.2-.3c-1-1.3-2.5-3.4-2.5-3.9 0-.4 1-1.1 1.8-1.5.1.2.3.4.4.5 1.4 1.4 3.6 1.4 5 0 .3-.3.5-.7.7-1l.1-.1s.2 0 .3.3c.2.3 0 4-.2 6.9v.3c0 .4-.1.8-.1 1.2-.2.1-.6.5-.7.7-.2.4-.2 2-.2 2.2v.3l.7-.7c0 .2.1.4.1.6 0 .3-.1.9-.1 1.1l-.1.3.3-.2c0 .3.8-.1 1.1-1m1.8-14.4c.5.5.4 1.7.2 3.2-.2-1.2-.7-2.4-1.4-3.3-.4-.5-.9-1-1.4-1.3.8.2 1.8.5 2.6 1.4m-12.1-1.4c.5-.8 1.9-2.5 5.9-2.5 3 0 4.7 1.1 5.6 2 .3.3.4.5.6.7-.9-.5-3.5-2-5.8-2.1-2.4-.2-5.4 1.4-6.3 1.9m.8-.1c1.3-.7 3.6-1.7 5.4-1.6 1.6.1 3.5.9 4.7 1.5-1.2-.4-2.8-.9-4.4-.9-1.9-.1-4.3.6-5.7 1m2.6.2-.5.4c-.1.1-1.6 1.4-2.9 2.8.3-.8.7-1.4 1.3-2.1.7-.8 1.6-1.3 2.6-1.6-.2.2-.4.3-.5.5M289 333c0-.3.2-.6.5-1-.1.6-.2 1.2-.3 1.7-.2-.2-.2-.5-.2-.7m2.1.3c0 .7 2.3 3.8 2.6 4.1l1.2.3.5.7h-.5c0 .1 0 .9.1 1.4.1.3.3.7.4.9-.3 0-.8-.1-1.1-.4-.2-.2-.4-.5-.5-.9-.1-.2-.2-.5-.3-.7l-.2-.3c-.1-.1-.2-.2-.3-.4-.2-.2-.4-.3-.6-.6-.9-.8-2.3-2.2-3-3.3.1-.9.2-1.9.5-2.9.9-1.1 2.2-2.4 2.9-3-.2.5-.4 1.3-.4 1.8 0 .4.3 1.1.5 1.4-.5.4-1.9 1.2-1.8 1.9m2.7-1.2c-1.3-1.3-1.3-3.3 0-4.6q.75-.75 1.8-.9c.2 0 .3-.1.5 0h.5q1.05.15 1.8.9c1.3 1.3 1.3 3.3 0 4.6s-3.3 1.3-4.6 0m5.8 11.8c0-.3.1-.6.1-.8 0-.3-.2-.9-.2-.9l-.1-.2-.6.6c0-.7 0-1.5.1-1.7s.5-.5.7-.7v-.1c0-.3 0-.8.1-1.3v-.3c.2-2.6.4-6.7.2-7.1-.1-.3-.3-.3-.4-.4.1-.4.4-1.3.2-2s-.7-1.4-.9-1.8h.2c.5.2 1 .6 1.5 1l.5.5c.8 1.1 1.3 2.5 1.5 4-.4 2-1.1 4.3-1.6 5.8l-.1.3c-.3 1.1-.5 1.6-.5 1.8v.5c.1.5.1 1.3 0 1.9-.1.4-.4.7-.7.9M233.9 343c.2-.6.1-1.4.1-2v-.5c0-.2.2-.9.5-1.8l.1-.3c.5-1.7 1-3.3 1.4-4.9.2 2.3-.2 5.1-.2 5.2h.3v-.1c0-.2.6-3.1.1-6 .4-2 .5-3.6-.1-4.3-.3-.4-.7-.7-1.1-.9.8.3 1.3.5 1.3.5l.4.2-.1-.4s-1.4-3.5-6.9-3.4c-5.6 0-6.3 3.1-6.4 3.2l-.1.3.3-.1s1.7-.6 3.6-1.1c-.9.3-1.7.8-2.3 1.5-.8.8-1.3 1.9-1.6 2.9-.5.7-.9 1.3-1 1.8-.1.4.1.8.4 1.3-.2 2.3.1 4.4.1 4.4h.3c0-.1-.2-2.2-.1-4 .7 1 1.9 2.1 2.8 3 .3.3.6.5.7.7l.3.3c.2.2.3.5.4.8.1.4.3.7.5 1 .5.5 1.5.5 1.6.5h.3l-.2-.2s-.5-.6-.6-1c-.1-.3-.1-.6-.1-.8l1.2.6-1.3-2.1-1.2-.3c-1-1.3-2.5-3.4-2.5-3.9 0-.4 1-1.1 1.8-1.5.1.2.3.4.4.5 1.4 1.4 3.6 1.4 5 0 .3-.3.5-.7.7-1l.1-.1s.2 0 .3.3c.2.3 0 4-.2 6.9v.3c0 .4-.1.8-.1 1.2-.2.1-.6.5-.7.7-.2.4-.2 2-.2 2.2v.3l.7-.7c0 .2.1.4.1.6 0 .3-.1.9-.1 1.1l-.1.3.3-.2c.1.3.8-.1 1.1-1m1.9-14.4c.5.5.4 1.7.2 3.2-.2-1.2-.7-2.4-1.4-3.3-.4-.5-.9-1-1.4-1.3.7.2 1.8.5 2.6 1.4m-12.2-1.4c.5-.8 1.9-2.5 5.9-2.5 3 0 4.7 1.1 5.6 2 .3.3.4.5.6.7-.9-.5-3.5-2-5.8-2.1-2.4-.2-5.4 1.4-6.3 1.9m.8-.1c1.3-.7 3.6-1.7 5.4-1.6 1.6.1 3.5.9 4.7 1.5-1.2-.4-2.8-.9-4.4-.9-1.9-.1-4.3.6-5.7 1m2.6.2-.5.4c-.1.1-1.6 1.4-2.9 2.8.3-.8.7-1.4 1.3-2.1.7-.8 1.6-1.3 2.6-1.6-.2.2-.4.3-.5.5m-4.7 5.7c0-.3.2-.6.5-1-.2.6-.2 1.2-.3 1.7-.1-.2-.2-.5-.2-.7m2.1.3c0 .7 2.3 3.8 2.6 4.1l1.2.3.5.7h-.5c0 .1 0 .9.1 1.4.1.3.3.7.4.9-.3 0-.8-.1-1.1-.4-.2-.2-.4-.5-.5-.9-.1-.2-.2-.5-.3-.7l-.2-.3c-.1-.1-.2-.2-.3-.4-.2-.2-.4-.3-.6-.6-.9-.8-2.3-2.2-3-3.3.1-.9.2-1.9.5-2.9.9-1.1 2.2-2.4 2.9-3-.2.5-.4 1.3-.4 1.8 0 .4.3 1.1.5 1.4-.4.4-1.9 1.2-1.8 1.9m2.7-1.2c-1.3-1.3-1.3-3.3 0-4.6q.75-.75 1.8-.9c.2 0 .3-.1.5 0h.5q1.05.15 1.8.9c1.3 1.3 1.3 3.3 0 4.6-1.2 1.3-3.3 1.3-4.6 0m5.9 11.8c0-.3.1-.6.1-.8 0-.3-.2-.9-.2-.9l-.1-.2-.6.6c0-.7 0-1.5.1-1.7s.5-.5.7-.7v-.1c0-.3 0-.8.1-1.3v-.3c.2-2.6.4-6.7.2-7.1-.2-.3-.3-.3-.4-.4.1-.4.4-1.3.2-2s-.7-1.4-.9-1.8h.2c.5.2 1 .6 1.5 1l.5.5c.8 1.1 1.3 2.5 1.5 4-.4 2-1.1 4.3-1.6 5.8l-.1.3c-.3 1.1-.5 1.6-.5 1.8v.5c.1.5.1 1.3 0 1.9-.2.4-.5.7-.7.9M278.3 343c.2-.6.1-1.4.1-2v-.5c0-.2.2-.9.5-1.8l.1-.3c.5-1.7 1-3.3 1.4-4.9.2 2.3-.2 5.1-.2 5.2h.3v-.1c0-.2.6-3.1.1-6 .4-2 .5-3.6-.1-4.3-.3-.4-.7-.7-1.1-.9.8.3 1.3.5 1.3.5l.4.2-.1-.4s-1.4-3.5-6.9-3.4c-5.6 0-6.3 3.1-6.4 3.2l-.1.3.3-.1s1.7-.6 3.6-1.1c-.9.3-1.7.8-2.3 1.5-.8.8-1.3 1.9-1.6 2.9-.5.7-.9 1.3-1 1.8-.1.4.1.8.4 1.3-.2 2.3.1 4.4.1 4.4h.3c0-.1-.2-2.2-.1-4 .7 1 1.9 2.1 2.8 3 .3.3.6.5.7.7l.3.3c.2.2.3.5.4.8.1.4.3.7.5 1 .5.5 1.5.5 1.6.5h.3l-.2-.2s-.5-.6-.6-1c-.1-.3-.1-.6-.1-.8l1.2.6-1.3-2.1-1.2-.3c-1-1.3-2.5-3.4-2.5-3.9 0-.4 1-1.1 1.8-1.5.1.2.3.4.4.5 1.4 1.4 3.6 1.4 5 0 .3-.3.5-.7.7-1l.1-.1s.2 0 .3.3c.2.3 0 4-.2 6.9v.3c0 .4-.1.8-.1 1.2-.2.1-.6.5-.7.7-.2.4-.2 2-.2 2.2v.3l.7-.7c0 .2.1.4.1.6 0 .3-.1.9-.1 1.1l-.1.3.3-.2c.1.3.9-.1 1.1-1m1.9-14.4c.5.5.4 1.7.2 3.2-.2-1.2-.7-2.4-1.4-3.3-.4-.5-.9-1-1.4-1.3.8.2 1.8.5 2.6 1.4m-12.2-1.4c.5-.8 1.9-2.5 5.9-2.5 3 0 4.7 1.1 5.6 2 .3.3.4.5.6.7-.9-.5-3.5-2-5.8-2.1-2.3-.2-5.3 1.4-6.3 1.9m.9-.1c1.3-.7 3.6-1.7 5.4-1.6 1.6.1 3.5.9 4.7 1.5-1.2-.4-2.8-.9-4.4-.9-2-.1-4.3.6-5.7 1m2.5.2-.5.4c-.1.1-1.6 1.4-2.9 2.8.3-.8.7-1.4 1.3-2.1.7-.8 1.6-1.3 2.6-1.6-.1.2-.3.3-.5.5m-4.6 5.7c0-.3.2-.6.5-1-.2.6-.2 1.2-.3 1.7-.2-.2-.3-.5-.2-.7m2 .3c0 .7 2.3 3.8 2.6 4.1l1.2.3.5.7h-.5c0 .1 0 .9.1 1.4.1.3.3.7.4.9-.3 0-.8-.1-1.1-.4-.2-.2-.4-.5-.5-.9-.1-.2-.2-.5-.3-.7l-.2-.3c-.1-.1-.2-.2-.3-.4-.2-.2-.4-.3-.6-.6-.9-.8-2.3-2.2-3-3.3.1-.9.2-1.9.5-2.9.9-1.1 2.2-2.4 2.9-3-.2.5-.4 1.3-.4 1.8 0 .4.3 1.1.5 1.4-.4.4-1.8 1.2-1.8 1.9m2.8-1.2c-1.3-1.3-1.3-3.3 0-4.6q.75-.75 1.8-.9c.2 0 .3-.1.5 0h.5q1.05.15 1.8.9c1.3 1.3 1.3 3.3 0 4.6s-3.3 1.3-4.6 0m5.8 11.8c0-.3.1-.6.1-.8 0-.3-.2-.9-.2-.9l-.1-.2-.6.6c0-.7 0-1.5.1-1.7s.5-.5.7-.7v-.1c0-.3 0-.8.1-1.3v-.3c.2-2.6.4-6.7.2-7.1-.2-.3-.3-.3-.4-.4.1-.4.4-1.3.2-2s-.7-1.4-.9-1.8h.2c.5.2 1 .6 1.5 1l.5.5c.8 1.1 1.3 2.5 1.5 4-.4 2-1.1 4.3-1.6 5.8l-.1.3c-.3 1.1-.5 1.6-.5 1.8v.5c.1.5.1 1.3 0 1.9-.2.4-.5.7-.7.9M256.1 343c.2-.6.1-1.4.1-2v-.5c0-.2.2-.9.5-1.8l.1-.3c.5-1.7 1-3.3 1.4-4.9.2 2.3-.2 5.1-.2 5.2h.3v-.1c0-.2.6-3.1.1-6 .4-2 .5-3.6-.1-4.3-.3-.4-.7-.7-1.1-.9.8.3 1.3.5 1.3.5l.4.2-.1-.4s-1.4-3.5-6.9-3.4c-5.6 0-6.3 3.1-6.4 3.2l-.1.3.3-.1s1.7-.6 3.6-1.1c-.9.3-1.7.8-2.3 1.5-.8.8-1.3 1.9-1.6 2.9-.5.7-.9 1.3-1 1.8-.1.4.1.8.4 1.3-.2 2.3.1 4.4.1 4.4h.3c0-.1-.2-2.2-.1-4 .7 1 1.9 2.1 2.8 3 .3.3.6.5.7.7l.3.3c.2.2.3.5.4.8.1.4.3.7.5 1 .5.5 1.5.5 1.6.5h.3l-.2-.2s-.5-.6-.6-1c-.1-.3-.1-.6-.1-.8l1.2.6-1.3-2.1-1.2-.3c-1-1.3-2.5-3.4-2.5-3.9 0-.4 1-1.1 1.8-1.5.1.2.3.4.4.5 1.4 1.4 3.6 1.4 5 0 .3-.3.5-.7.7-1l.1-.1s.2 0 .3.3c.2.3 0 4-.2 6.9v.3c0 .4-.1.8-.1 1.2-.2.1-.6.5-.7.7-.2.4-.2 2-.2 2.2v.3l.7-.7c0 .2.1.4.1.6 0 .3-.1.9-.1 1.1l-.1.3.3-.2c.1.3.9-.1 1.1-1m1.9-14.4c.5.5.4 1.7.2 3.2-.2-1.2-.7-2.4-1.4-3.3-.4-.5-.9-1-1.4-1.3.7.2 1.8.5 2.6 1.4m-12.2-1.4c.5-.8 1.9-2.5 5.9-2.5 3 0 4.7 1.1 5.6 2 .3.3.4.5.6.7-.9-.5-3.5-2-5.8-2.1-2.4-.2-5.4 1.4-6.3 1.9m.9-.1c1.3-.7 3.6-1.7 5.4-1.6 1.6.1 3.5.9 4.7 1.5-1.2-.4-2.8-.9-4.4-.9-2-.1-4.3.6-5.7 1m2.5.2-.5.4c-.1.1-1.6 1.4-2.9 2.8.3-.8.7-1.4 1.3-2.1.7-.8 1.6-1.3 2.6-1.6zm-4.7 5.7c0-.3.2-.6.5-1-.2.6-.2 1.2-.3 1.7-.1-.2-.2-.5-.2-.7m2.1.3c0 .7 2.3 3.8 2.6 4.1l1.2.3.5.7h-.5c0 .1 0 .9.1 1.4.1.3.3.7.4.9-.3 0-.8-.1-1.1-.4-.2-.2-.4-.5-.5-.9-.1-.2-.2-.5-.3-.7l-.2-.3c-.1-.1-.2-.2-.3-.4-.2-.2-.4-.3-.6-.6-.9-.8-2.3-2.2-3-3.3.1-.9.2-1.9.5-2.9.9-1.1 2.2-2.4 2.9-3-.2.5-.4 1.3-.4 1.8 0 .4.3 1.1.5 1.4-.4.4-1.8 1.2-1.8 1.9m2.8-1.2c-1.3-1.3-1.3-3.3 0-4.6q.75-.75 1.8-.9c.2 0 .3-.1.5 0h.5q1.05.15 1.8.9c1.3 1.3 1.3 3.3 0 4.6s-3.4 1.3-4.6 0m5.8 11.8c0-.3.1-.6.1-.8 0-.3-.2-.9-.2-.9l-.1-.2-.6.6c0-.7 0-1.5.1-1.7s.5-.5.7-.7v-.1c0-.3 0-.8.1-1.3v-.3c.2-2.6.4-6.7.2-7.1-.2-.3-.3-.3-.4-.4.1-.4.4-1.3.2-2s-.7-1.4-.9-1.8h.2c.5.2 1 .6 1.5 1l.5.5c.8 1.1 1.3 2.5 1.5 4-.4 2-1.1 4.3-1.6 5.8l-.1.3c-.3 1.1-.5 1.6-.5 1.8v.5c.1.5.1 1.3 0 1.9-.2.4-.5.7-.7.9" />
                          <text transform="translate(175.443 74.79)">
                            <tspan x={0} y={0} className="st164 st166">
                              {"FREE"}
                            </tspan>
                            <tspan x={-7.5} y={5.7} className="st164 st166">
                              {"STANDING"}
                            </tspan>
                            <tspan x={-1} y={11.3} className="st164 st166">
                              {"POTS"}
                            </tspan>
                          </text>
                          <text className="st203 st164 st202" transform="translate(247.514 61.64)">
                            {"BENCH SEAT"}
                          </text>
                          <text className="st203 st164 st202" transform="translate(568.914 61.246)">
                            {"BENCH SEAT"}
                          </text>
          
                        </g>
          
                        </svg>


        </section>
    </div>
    </>
  )
}
