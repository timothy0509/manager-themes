/* Shared sample invoice data for theme comparison screenshots.
   Mirrors the Manager.io context-response body shape. */
var SAMPLE_BODY = {
    direction: "ltr",
    title: "Tax Invoice",
    description: "Website redesign and development - Phase 2",
    reference: "INV-2026-1042",
    business: {
        name: "Able Services Pty Ltd",
        address: "Level 4, 123 Queen Street\nBrisbane QLD 4000\nABN 12 345 678 901\nhello@ableservices.com.au",
        logo: ""
    },
    recipient: {
        name: "Acme Construction Ltd",
        address: "PO Box 456\nSydney NSW 2000\nAttn: Accounts Payable",
        code: "C-0019",
        email: "accounts@acmeconstruction.com.au"
    },
    fields: [
        { label: "Invoice number", text: "INV-2026-1042" },
        { label: "Issue date", text: "27 Sep 2026" },
        { label: "Due date", text: "11 Oct 2026" },
        { label: "Payment terms", text: "14 days" }
    ],
    table: {
        columns: [
            { label: "Description", align: "left" },
            { label: "Qty", align: "center" },
            { label: "Unit price", align: "right", minWidth: true },
            { label: "Amount", align: "right", minWidth: true }
        ],
        rows: [
            { cells: [
                { text: "Homepage redesign\nIncludes 3 revision rounds" },
                { text: "1" },
                { text: "$2,400.00" },
                { text: "$2,400.00" }
            ] },
            { cells: [
                { text: "Product page template build" },
                { text: "4" },
                { text: "$650.00" },
                { text: "$2,600.00" }
            ] },
            { cells: [
                { text: "Accessibility audit and fixes (WCAG 2.2 AA)" },
                { text: "8" },
                { text: "$180.00" },
                { text: "$1,440.00" }
            ] },
            { cells: [
                { text: "Hosting and SSL - annual" },
                { text: "1" },
                { text: "$240.00" },
                { text: "$240.00" }
            ] }
        ],
        totals: [
            { label: "Subtotal", text: "$6,680.00", number: 6680 },
            { label: "GST 10%", text: "$668.00", number: 668, class: "taxAmount" },
            { label: "Total", text: "$7,348.00", number: 7348, emphasis: true, key: "Total" }
        ]
    },
    custom_fields: [
        { label: "Amount in words", text: "Seven thousand three hundred and forty-eight dollars" },
        { label: "Notes", text: "Thank you for your business.\nPlease quote INV-2026-1042 on all payments." },
        { label: "Bank details", text: "BSB 064-001  Acct 1234 5678" }
    ],
    footers: [
        "Able Services Pty Ltd - ABN 12 345 678 901",
        "Late payments attract a 1.5% monthly fee."
    ]
};
