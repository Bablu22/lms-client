"use client";

import { Disclosure } from "@headlessui/react";
import { HiOutlinePlusSm } from "react-icons/hi";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { faqs } from "./data";

const Faq = () => {
  return (
    <div className="grid grid-cols-1 mt-10 lg:grid-cols-3 gap-8 py-8 px-4 sm:px-6 lg:px-8">
      <div className="lg:mr-8">
        <h2 className="text-3xl font-semibold leading-9 text-gray-900">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-sm leading-7 text-gray-600">
          Can’t find the answer you’re looking for? Reach out to our{" "}
          <a
            href="#"
            className="font-semibold  text-gray-900 hover:text-gray-700"
          >
            customer support{" "}
          </a>
          team.
        </p>
      </div>
      <div className="grid lg:col-span-2 gap-6">
        {faqs.map((faq) => (
          <Disclosure as="div" key={faq.question} className="pt-6">
            {({ open }) => (
              <>
                <div>
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base flex items-center space-x-8 font-semibold leading-7">
                      <span className="text-lg text-indigo-600">0{faq.id}</span>{" "}
                      <span>{faq.question}</span>
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      {open ? (
                        <HiMiniMinusSmall
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <HiOutlinePlusSm
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  </Disclosure.Button>
                </div>
                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                  <p className="text-base leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default Faq;
