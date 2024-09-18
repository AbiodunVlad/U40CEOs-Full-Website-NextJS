import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
// import { Page, View, Document, StyleSheet } from "@react-pdf/renderer";
import { Flex, Stack, Text, Button } from "@chakra-ui/react";
import Image from "next/image";

// Configure the PDF.js worker path
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "/pdf.worker.min.js",
//   window.location.origin
// ).toString();

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.js`;

pdfjs.GlobalWorkerOptions.workerSrc = `/node_modules/pdfjs-dist/build/pdf.worker.min.js`;

interface PDFViewerProps {
  pdfUrl: string;
  singlePostView: boolean;
}

export default function PDFviewer({ pdfUrl, singlePostView }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    // setPageNumber(1);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <Flex direction="column" height={singlePostView ? "448" : "320px"}>
      <Flex height={singlePostView ? "420" : "300px"} overflow="scroll">
        {/* <Image src="/images/courseImg.svg" alt="" width={20} height={20} /> */}
        <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </Flex>

      <Flex direction="column" justify="center" alignSelf="center">
        <Text fontSize="10.5pt" alignSelf="center">
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </Text>
        <Flex justify="center" align="center">
          <Button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
            height="28px"
            marginLeft="5px"
            marginRight="5px"
            marginBottom="10px"
          >
            Previous
          </Button>
          <Button
            type="button"
            disabled={pageNumber >= (numPages || 0)}
            onClick={nextPage}
            height="28px"
            marginLeft="5px"
            marginRight="5px"
            marginBottom="10px"
          >
            Next
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
