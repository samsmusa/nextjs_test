'use client';

import React, {useEffect, useState} from 'react';
import JsxParser from "react-jsx-parser";

const DynamicParse: React.FC = () => {
    // const [JsxParser, setJsxParser] = useState<any>(null);

    // useEffect(() => {
    //     // const loadJsxParser = async () => {
    //     //     const moduless = await import('react-jsx-parser');
    //     //     setJsxParser(() => moduless.default);
    //     // };
    //     //
    //     // loadJsxParser();
    // }, []);


    const dynamicJSX = `
        <div>
            <h2 className="text-xl font-bold">Dynamic Content</h2>
            <p>Here is some additional content.</p>
        </div>
    `;

    return (
        <div>
            {JsxParser ? (
                <JsxParser
                    components={{}}
                    jsx={dynamicJSX}
                />
            ) : (
                <p>Loading dynamic content...</p>
            )}
        </div>
    );
};

export default DynamicParse;
