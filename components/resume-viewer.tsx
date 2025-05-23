"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Set up the worker for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function ResumeViewer() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const { toast } = useToast();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1); // reset page number on load
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => {
      const newPageNumber = prevPageNumber + offset;
      return newPageNumber >= 1 && newPageNumber <= (numPages || 1)
        ? newPageNumber
        : prevPageNumber;
    });
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  function zoomIn() {
    setScale((prevScale) => Math.min(prevScale + 0.2, 2.0));
  }

  function zoomOut() {
    setScale((prevScale) => Math.max(prevScale - 0.2, 0.6));
  }

  function downloadResume() {
    const link = document.createElement("a");
    link.href = "/sample-resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Resume downloaded",
      description: "Your resume has been downloaded successfully.",
    });
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={previousPage}
            disabled={pageNumber <= 1}
            aria-label="Previous page"
            className="border-[#1a1a4a] text-[#a9b1ff] hover:bg-[#1a1a4a]/50"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-[#a9b1ff]">
            Page {pageNumber} of {numPages || "--"}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={nextPage}
            disabled={numPages === null || pageNumber >= numPages}
            aria-label="Next page"
            className="border-[#1a1a4a] text-[#a9b1ff] hover:bg-[#1a1a4a]/50"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={zoomOut}
            aria-label="Zoom out"
            className="border-[#1a1a4a] text-[#a9b1ff] hover:bg-[#1a1a4a]/50"
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="text-[#a9b1ff]">{Math.round(scale * 100)}%</span>
          <Button
            variant="outline"
            size="icon"
            onClick={zoomIn}
            aria-label="Zoom in"
            className="border-[#1a1a4a] text-[#a9b1ff] hover:bg-[#1a1a4a]/50"
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={downloadResume}
            aria-label="Download resume"
            className="border-[#1a1a4a] text-[#a9b1ff] hover:bg-[#1a1a4a]/50"
          >
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="max-h-[60vh] overflow-auto border rounded-md p-4 bg-white w-full">
        <Document
          file="/sample-resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div
              className="flex h-[60vh] w-full items-center justify-center"
              role="status"
              aria-busy="true"
            >
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#7678ed]"></div>
              <span className="sr-only">Loading PDF...</span>
            </div>
          }
          error={
            <div className="flex h-[60vh] w-full flex-col items-center justify-center text-center">
              <p className="text-lg font-medium">Failed to load PDF</p>
              <p className="text-sm text-muted-foreground">
                Please try again or download the resume directly.
              </p>
              <Button
                className="mt-4 bg-[#1a1a4a] hover:bg-[#2a2a6a] text-white border-none"
                onClick={downloadResume}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
    </div>
  );
}
