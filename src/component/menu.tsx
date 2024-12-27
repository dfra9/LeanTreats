"use client";

import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";

interface MenuItem {
  id: number;
  name: string;
  price: string;
  description: string;
}

async function getMenuItems({ pageParam }: { pageParam: number }) {
  // Simulate API call with mock data
  const items: MenuItem[] = [
    {
      id: pageParam * 1,
      name: "ORIGINAL COOKIES",
      price: "12K",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      id: pageParam * 2,
      name: "CHOCOLATE COOKIES",
      price: "13K",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      id: pageParam * 3,
      name: "PEANUT COOKIES",
      price: "13K",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      id: pageParam * 4,
      name: "MATCHA COOKIES",
      price: "15K",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      id: pageParam * 5,
      name: "RED VELVET COOKIES",
      price: "15K",
      description: "Lorem ipsum dolor sit amet",
    },
  ];

  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
  return items;
}

export function Menu() {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["menu"],
      queryFn: getMenuItems,
      getNextPageParam: (lastPage, pages) => pages.length + 1,
      initialPageParam: 1,
    });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <section className="py-20 bg-[#F7C94B]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#00584D] mb-4">OUR MENU</h2>
          <div className="flex justify-center gap-4 text-[#00584D]">
            {Array(5)
              .fill("★")
              .map((star, i) => (
                <span key={i}>{star}</span>
              ))}
          </div>
        </div>
        <div className="max-w-2xl mx-auto space-y-6">
          {data?.pages.map((group, i) => (
            <div key={i} className="space-y-6">
              {group.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg p-6 shadow-lg flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-xl font-bold text-[#00584D]">
                      {item.name}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <span className="text-2xl font-bold text-[#F7C94B]">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          ))}
          <div ref={ref} className="h-10">
            {isFetchingNextPage && (
              <div className="text-center">Loading more...</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
