import Link from "next/link";
import Image from "next/image";
import {
  FaWhatsapp,
  FaBuilding,
  FaClipboardCheck,
  FaFileAlt,
  FaBoxOpen,
  FaShip,
  FaGlobe,
} from "react-icons/fa";
import CompanyVideo from "@/components/home/CompanyVideo";
import BlogCarousel from "@/components/home/BlogCarousel";
import { getProducts, getRecentBlogPosts, getPackaging, getQualityGrades } from "@/lib/data";

/* ===== HOMEPAGE 02 - TRUST / CAPABILITY BAR (provable facts only) ===== */
const capabilityFacts = [
  {
    icon: FaBuilding,
    label: "INDONESIAN REGISTERED COMPANY",
    copy: "PT legal entity - supporting documents available to qualified counterparties",
  },
  {
    icon: FaClipboardCheck,
    label: "BATCH QUALITY CONTROL",
    copy: "Defined pre-shipment quality checkpoints",
  },
  {
    icon: FaFileAlt,
    label: "COA & SDS SUPPORT",
    copy: "Applicable technical documents available according to order/shipment",
  },
  {
    icon: FaBoxOpen,
    label: "PRIVATE LABEL / OEM",
    copy: "Custom packaging subject to MOQ, artwork approval, and lead time",
  },
  {
    icon: FaShip,
    label: "CONTAINER SUPPLY",
    copy: "Loading quantity confirmed by product/packaging configuration",
  },
  {
    icon: FaGlobe,
    label: "EXPORT COORDINATION",
    copy: "Documentation and carrier requirements handled per shipment",
  },
];

/* ===== HOMEPAGE 03 - VALUES (locked) ===== */
const values = [
  { name: "Transparency", meaning: "Clear communication and transparent commercial information." },
  { name: "Reliability", meaning: "Delivering according to agreed specifications and commitments." },
  { name: "Quality", meaning: "Maintaining consistent product standards through defined quality control." },
  { name: "Service", meaning: "Responsive support throughout procurement and shipment coordination." },
  {
    name: "Long-Term Partnership",
    meaning: "Building sustainable business relationships beyond a single transaction.",
  },
];

/* ===== HOMEPAGE 06 - WHY WORK WITH US (locked) ===== */
const procurementPoints = [
  {
    title: "SPECIFICATION ALIGNMENT",
    copy: "Product parameters are confirmed before production.",
  },
  {
    title: "PROTECT YOUR MARKET",
    copy: "We prioritize consistency and supply continuity to help protect your brand reputation.",
  },
  {
    title: "BATCH VERIFICATION",
    copy: "Product samples, QC evidence, and applicable laboratory reports can be reviewed before shipment.",
  },
  {
    title: "PACKAGING FLEXIBILITY",
    copy: "Standard and private-label configurations are available subject to order requirements.",
  },
  {
    title: "EXPORT COORDINATION",
    copy: "Documentation and carrier requirements are handled according to the confirmed shipment.",
  },
  {
    title: "TRANSPARENT COMMUNICATION",
    copy: "Commercial and production updates are communicated against agreed milestones.",
  },
];

/* ===== HOMEPAGE 07 - QC CHECKPOINTS ===== */
const qcCheckpoints = [
  "Raw material / charcoal condition",
  "Briquette dimensions and visual integrity",
  "Drying / moisture control",
  "Ash / fixed carbon / volatile matter where tested",
  "Internal burn-performance observation",
  "Packing condition and carton verification",
  "Shipment / vanning inspection where required",
];

/* ===== HOMEPAGE 09 - EXPORT DOCUMENTS (as required / when applicable) ===== */
const exportDocuments = [
  { category: "Technical", items: "COA / ROA, SDS/MSDS, relevant laboratory report" },
  {
    category: "DG / Safety",
    items: "Dangerous Goods Declaration + Packing Certificate, shipment-specific safety documents",
  },
  {
    category: "Production / Packing",
    items: "Weathering evidence, packing temperature, vanning/survey evidence where required",
  },
  { category: "Commercial", items: "Commercial Invoice, Packing List" },
  { category: "Origin", items: "Certificate of Origin / SKA when applicable" },
  { category: "Shipping", items: "Bill of Lading and carrier-specific documents" },
];

/* ===== HOMEPAGE 10 - HOW WE WORK (locked) ===== */
const howWeWork = [
  {
    step: "01",
    title: "Specification Alignment",
    copy: "Confirm grade, dimensions, packaging, quantity, destination, and commercial framework.",
  },
  {
    step: "02",
    title: "Sample Evaluation",
    copy: "Provide evaluation sample/configuration where applicable.",
  },
  {
    step: "03",
    title: "Commercial Confirmation",
    copy: "Quotation / PI, Incoterm, payment, and lead time.",
  },
  {
    step: "04",
    title: "Production & Packaging",
    copy: "Execute confirmed specification.",
  },
  {
    step: "05",
    title: "Quality Verification",
    copy: "Internal QC and applicable lab/inspection evidence.",
  },
  {
    step: "06",
    title: "Shipment Preparation",
    copy: "Packing, DG/shipping documentation, and carrier acceptance.",
  },
  {
    step: "07",
    title: "Loading & Shipment",
    copy: "Release after agreed pre-shipment conditions are completed.",
  },
];

/* ===== HOMEPAGE 11 - OPERATIONAL PROOF (captioned production evidence) ===== */
const productionEvidence = [
  { image: "/images/instagram/production/01-manufacturing.jpg", caption: "Manufacturing process" },
  { image: "/images/instagram/team/01-qc-inspection.jpg", caption: "Dimension check" },
  { image: "/images/instagram/testing/01-burn-test.jpg", caption: "Burn observation" },
  { image: "/images/instagram/packaging/01-private-label.jpg", caption: "Packing inspection" },
];

/* ===== HOMEPAGE 13 - RFQ FIELDS SUMMARY ===== */
const rfqFields = [
  "Product: Shisha / BBQ",
  "Shape & Size: Cube / Hexagonal / Finger / Flower + approved size",
  "Target Specification: Platinum / Super Premium / Premium",
  "Quantity: Container / MT / trial order",
  "Packaging: Standard / Private Label",
  "Destination: Country + port",
  "Incoterm: FOB / CFR / CIF / Need recommendation",
  "Company: Company name + website",
  "Contact: Business email + WhatsApp",
  "Message: Specific requirement / target timeline",
];

export default function HomeSections() {
  const products = getProducts();
  const grades = getQualityGrades();
  const blogPosts = getRecentBlogPosts(4);
  const packagingOptions = getPackaging();

  return (
    <>
      {/* ========== 02 - TRUST / CAPABILITY BAR ========== */}
      <section className="relative w-full border-b border-white/10 bg-[#0D0D0D] py-10 md:py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 sm:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10">
          {capabilityFacts.map((fact) => (
            <div key={fact.label} className="flex items-start gap-4">
              <fact.icon className="mt-0.5 size-8 shrink-0 text-[#EFA12D]" />
              <div>
                <h3
                  className="text-sm font-bold tracking-wide text-white md:text-base"
                  style={{ fontFamily: "var(--font-josefin-sans)" }}
                >
                  {fact.label}
                </h3>
                <p className="mt-1 text-[13px] leading-[20px] text-[#C6C6C6] md:text-sm">
                  {fact.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== 03 - COMPANY SNAPSHOT + VISION, MISSION & VALUES ========== */}
      <section className="bg-primary w-full px-5 py-16 md:px-10 md:py-20 lg:px-[100px] lg:py-24">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-12">
          <CompanyVideo />
          <div className="flex-1">
            <h2
              className="text-left text-[28px] font-bold text-white md:text-[32px]"
              style={{ fontFamily: "var(--font-josefin-sans)" }}
            >
              PT CHARCOALNESIA GLOBAL EXPORT
            </h2>
            <p
              className="mt-4 text-[15px] leading-[27px] text-[#cfcfcf]"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              PT Charcoalnesia Global Export is an Indonesia-based supplier and exporter of coconut
              shell charcoal briquettes for shisha, hookah, BBQ, and private-label markets.
            </p>
            <p
              className="mt-4 text-[15px] leading-[27px] text-[#cfcfcf]"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              Production in Indonesia is coordinated according to defined product specifications,
              quality-control checkpoints, packaging requirements, and export preparation for each
              confirmed order.
            </p>

            {/* Vision & Mission - locked copy */}
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-[#EFA12D]/25 bg-black/30 p-5">
                <h3
                  className="mb-2 text-base font-bold text-[#EFA12D]"
                  style={{ fontFamily: "var(--font-josefin-sans)" }}
                >
                  OUR VISION
                </h3>
                <p className="text-[13px] leading-[21px] text-[#C6C6C6] md:text-sm">
                  To become a long-term strategic supply partner for importers, recognized for
                  dependable quality, supply continuity, and responsible export execution that
                  supports sustainable business growth.
                </p>
              </div>
              <div className="rounded-xl border border-[#EFA12D]/25 bg-black/30 p-5">
                <h3
                  className="mb-2 text-base font-bold text-[#EFA12D]"
                  style={{ fontFamily: "var(--font-josefin-sans)" }}
                >
                  OUR MISSION
                </h3>
                <p className="text-[13px] leading-[21px] text-[#C6C6C6] md:text-sm">
                  To be a dependable pillar supporting the growth of our import partners by
                  maintaining consistent and realistically controlled product quality, while
                  providing stable supply to help protect their brand reputation and distribution
                  continuity.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="mt-6 flex flex-wrap gap-2">
              {values.map((value) => (
                <div
                  key={value.name}
                  title={value.meaning}
                  className="cursor-help rounded-full border border-[#EFA12D]/40 px-4 py-1.5 text-[12px] font-semibold text-[#EFA12D] md:text-[13px]"
                >
                  {value.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== 04 - PRODUCT RANGE ========== */}
      <section className="relative w-full overflow-hidden bg-[#161616] px-5 py-12 md:px-10 md:py-16 lg:px-[100px]">
        <div className="absolute top-0 left-0 h-px w-full bg-[#EFA12D]" />
        <h2
          className="mb-2 text-center text-[28px] font-bold uppercase text-white md:text-[36px] lg:text-[42px]"
          style={{ fontFamily: "var(--font-josefin-sans)" }}
        >
          OUR <span className="text-[#EFA12D]">PRODUCT RANGE</span>
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-center text-sm text-[#C6C6C6] md:text-base">
          Available product shapes across the Charcoalnesia range: Cube, Hexagonal, Finger, and
          Flower only.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-[22px] border border-white/15 bg-black/30 transition-all duration-500 hover:border-[#EFA12D]/80 hover:shadow-[0_0_30px_rgba(239,161,45,0.25)]"
            >
              <Link href={`/our-products/${product.slug}`} className="block">
                <div
                  className="relative aspect-square w-full overflow-hidden"
                  style={{
                    background:
                      "radial-gradient(circle at center, #000 0%, #171717 50%, rgba(255,255,255,0.19) 100%)",
                  }}
                >
                  <Image
                    src={product.images[0] || "/images/products/cube-25.png"}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3
                    className="text-[16px] font-bold text-white md:text-[17px]"
                    style={{ fontFamily: "var(--font-josefin-sans)" }}
                  >
                    {product.name}
                  </h3>
                  <dl className="mt-3 space-y-1.5 text-[13px] leading-[19px] text-[#C6C6C6]">
                    <div>
                      <dt className="inline font-semibold text-white/85">Application: </dt>
                      <dd className="inline">{product.application}</dd>
                    </div>
                    <div>
                      <dt className="inline font-semibold text-white/85">Shape: </dt>
                      <dd className="inline">{product.name.replace(" Briquettes", "")} - fixed range, no custom shape</dd>
                    </div>
                    <div>
                      <dt className="inline font-semibold text-white/85">Packaging: </dt>
                      <dd className="inline">{product.packaging.join(" / ")}</dd>
                    </div>
                  </dl>
                  <p className="mt-3 text-[13px] leading-[20px] text-[#9C9C9C]">
                    {product.description}
                  </p>
                </div>
              </Link>
              <div className="mt-auto p-5 pt-0">
                <Link
                  href={`/our-products/${product.slug}`}
                  className="inline-block rounded-[40px] border border-[#EFA12D] px-5 py-2 text-[12px] font-bold tracking-wide text-[#EFA12D] transition-all duration-300 hover:bg-[#EFA12D] hover:text-black md:text-[13px]"
                  style={{ fontFamily: "var(--font-josefin-sans)" }}
                >
                  VIEW SPECIFICATION
                </Link>
              </div>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-[13px] text-[#9C9C9C] md:text-sm">
          Private-label packaging is available subject to artwork approval, packaging MOQ, and
          production lead time.
        </p>
        <div className="absolute bottom-0 left-0 h-px w-full bg-[#EFA12D]" />
      </section>

      {/* ========== 05 - COMMERCIAL SPECIFICATION PREVIEW ========== */}
      <section className="bg-primary w-full px-5 py-14 md:px-10 md:py-16 lg:px-[100px]">
        <h2
          className="mb-2 text-center text-[28px] font-bold uppercase text-white md:text-[36px]"
          style={{ fontFamily: "var(--font-josefin-sans)" }}
        >
          COMMERCIAL <span className="text-[#EFA12D]">SPECIFICATION</span>
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-sm text-[#C6C6C6] md:text-base">
          Material: 100% Coconut Shell Charcoal Material | Natural Binder: Tapioca Starch
        </p>

        <div className="overflow-x-auto">
          <table className="mx-auto w-full min-w-[760px] max-w-5xl border-collapse text-center text-[13px] md:text-sm">
            <thead>
              <tr className="bg-[#1D1D1D] text-white">
                <th className="border border-white/15 px-4 py-3 font-bold">Grade</th>
                <th className="border border-white/15 px-4 py-3 font-bold">Ash Content</th>
                <th className="border border-white/15 px-4 py-3 font-bold">Volatile Matter</th>
                <th className="border border-white/15 px-4 py-3 font-bold">Moisture</th>
                <th className="border border-white/15 px-4 py-3 font-bold">Fixed Carbon</th>
                <th className="border border-white/15 px-4 py-3 font-bold">Gross Calorific Value</th>
                <th className="border border-white/15 px-4 py-3 font-bold">Ash Colour</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((grade, idx) => (
                <tr
                  key={grade.name}
                  className={idx === 0 ? "bg-[#EFA12D]/10" : "bg-black/20"}
                >
                  <td className="border border-white/15 px-4 py-3 font-bold text-[#EFA12D]">
                    {grade.name}
                  </td>
                  <td className="border border-white/15 px-4 py-3 text-[#cfcfcf]">{grade.ash}</td>
                  <td className="border border-white/15 px-4 py-3 text-[#cfcfcf]">{grade.volatile}</td>
                  <td className="border border-white/15 px-4 py-3 text-[#cfcfcf]">{grade.moisture}</td>
                  <td className="border border-white/15 px-4 py-3 text-[#cfcfcf]">{grade.fixedCarbon}</td>
                  <td className="border border-white/15 px-4 py-3 text-[#cfcfcf]">{grade.calorific}</td>
                  <td className="border border-white/15 px-4 py-3 text-[#cfcfcf]">{grade.ashColour}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-[12px] leading-[19px] text-[#9C9C9C] md:text-[13px]">
          Use these as website commercial grade references. Batch-specific actual results remain
          shown only in the applicable COA / laboratory report.
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            href="/production-info#quality-grades"
            className="rounded-[40px] bg-secondary px-8 py-3 text-[13px] font-bold text-white transition-all duration-300 hover:bg-[#B87C22] md:text-sm"
            style={{ fontFamily: "var(--font-josefin-sans)" }}
          >
            VIEW FULL GRADES & SPECIFICATION
          </Link>
        </div>
      </section>

      {/* ========== 06 - PROCUREMENT ASSURANCE (WHY WORK WITH US) ========== */}
      <section className="relative w-full overflow-hidden py-10 md:py-14 lg:py-16">
        <h2
          className="mb-4 text-center text-[28px] font-bold uppercase text-white md:text-[36px] lg:text-[42px]"
          style={{ fontFamily: "var(--font-josefin-sans)" }}
        >
          WHY <span className="text-[#EFA12D]">WORK WITH US</span>
        </h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 px-5 sm:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-6">
          {procurementPoints.map((point, i) => (
            <div
              key={point.title}
              className="flex flex-col border border-[#EFA12D]/25 p-6 transition-all duration-300 hover:border-[#EFA12D] hover:shadow-[0_0_10px_rgba(239,161,45,0.31)]"
              style={{
                background:
                  "radial-gradient(circle at center, #000 0%, #171717 50%, rgba(245,152,13,0.19) 90%)",
              }}
            >
              <span className="mb-3 text-[24px] font-bold text-[#EFA12D]/60">{String(i + 1).padStart(2, "0")}</span>
              <h3
                className="text-[14px] font-bold text-[#EFA12D] md:text-[15px]"
                style={{ fontFamily: "var(--font-josefin-sans)" }}
              >
                {point.title}
              </h3>
              <p className="mt-2 text-[13px] leading-[21px] text-[#C6C6C6]">{point.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== 07 - PRODUCTION & QUALITY CONTROL ========== */}
      <section className="bg-[#161616] w-full px-5 py-14 md:px-10 md:py-16 lg:px-[100px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2
              className="mb-4 text-[26px] font-bold text-white md:text-[32px]"
              style={{ fontFamily: "var(--font-josefin-sans)" }}
            >
              PRODUCTION & <span className="text-[#EFA12D]">QUALITY CONTROL</span>
            </h2>
            <p className="mb-4 text-[14px] leading-[24px] text-[#C6C6C6] md:text-[15px]">
              Quality is evaluated against agreed product parameters and defined checkpoints during
              production, drying, final inspection, packing, and shipment preparation.
            </p>
            <p className="mb-6 text-[14px] leading-[24px] text-[#C6C6C6] md:text-[15px]">
              Applicable batch testing and third-party analysis can be arranged according to buyer,
              contract, or shipment requirements.
            </p>
            <Link
              href="/production-info#production-process"
              className="inline-block rounded-[40px] border border-[#EFA12D] px-7 py-3 text-[13px] font-bold text-[#EFA12D] transition-all duration-300 hover:bg-[#EFA12D] hover:text-black md:text-sm"
              style={{ fontFamily: "var(--font-josefin-sans)" }}
            >
              VIEW PRODUCTION PROCESS
            </Link>
          </div>
          <div>
            <h3
              className="mb-4 text-lg font-bold text-white"
              style={{ fontFamily: "var(--font-josefin-sans)" }}
            >
              Quality Checkpoints
            </h3>
            <ul className="space-y-2.5">
              {qcCheckpoints.map((checkpoint) => (
                <li
                  key={checkpoint}
                  className="flex items-start gap-3 border-b border-white/10 pb-2.5 text-[13px] leading-[20px] text-[#C6C6C6] md:text-sm"
                >
                  <span className="mt-1 size-2 shrink-0 rounded-full bg-[#EFA12D]" />
                  {checkpoint}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ========== 08 - PACKAGING & PRIVATE LABEL ========== */}
      <section className="bg-primary w-full px-5 py-14 md:px-10 md:py-16 lg:px-[100px]">
        <h2
          className="mb-2 text-center text-[28px] font-bold uppercase text-white md:text-[36px]"
          style={{ fontFamily: "var(--font-josefin-sans)" }}
        >
          PACKAGING & <span className="text-[#EFA12D]">PRIVATE LABEL</span>
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-center text-[13px] text-[#9C9C9C] md:text-sm">
          Standard and private-label packaging configurations. Exact net weight, gross weight,
          dimensions, and container loading are confirmed per product and packaging specification
          in the quotation.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packagingOptions.map((pkg) => (
            <div
              key={pkg.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-black/30 transition-all duration-300 hover:border-[#EFA12D]"
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3
                  className="text-[15px] font-bold text-white"
                  style={{ fontFamily: "var(--font-josefin-sans)" }}
                >
                  {pkg.name}
                </h3>
                <p className="mt-1.5 text-[12px] leading-[18px] text-[#9C9C9C]">{pkg.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Private Label / OEM - locked copy */}
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-[#EFA12D]/30 bg-black/30 p-6 md:p-8">
          <h3
            className="mb-3 text-center text-xl font-bold text-[#EFA12D]"
            style={{ fontFamily: "var(--font-josefin-sans)" }}
          >
            PRIVATE LABEL / OEM PACKAGING
          </h3>
          <p className="text-center text-[14px] leading-[24px] text-[#C6C6C6] md:text-[15px]">
            Custom branding and packaging are available subject to artwork approval, packaging
            specification, MOQ, and production lead time. Commercial details are confirmed in the
            quotation / Proforma Invoice.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/production-info#packaging-info"
              className="text-[14px] font-semibold text-[#EFA12D] italic underline-offset-4 hover:underline md:text-[15px]"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              View Packaging Details
            </Link>
          </div>
        </div>
      </section>

      {/* ========== 09 - EXPORT & DG DOCUMENTATION ========== */}
      <section className="bg-[#161616] w-full px-5 py-14 md:px-10 md:py-16 lg:px-[100px]">
        <h2
          className="mb-2 text-center text-[28px] font-bold uppercase text-white md:text-[36px]"
          style={{ fontFamily: "var(--font-josefin-sans)" }}
        >
          EXPORT & <span className="text-[#EFA12D]">DG DOCUMENTATION</span>
        </h2>
        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-[#EFA12D]/30 bg-black/30 p-6 md:p-8">
          <h3
            className="mb-3 text-lg font-bold text-white md:text-xl"
            style={{ fontFamily: "var(--font-josefin-sans)" }}
          >
            IMDG-COMPLIANT MARITIME SHIPPING
          </h3>
          <p className="text-[14px] leading-[24px] text-[#C6C6C6] md:text-[15px]">
            Charcoal shipments are prepared in accordance with IMDG Code requirements (UN 1361,
            Class 4.2), supported by applicable SDS and self-heating test documentation to
            facilitate safe and compliant international sea transport.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-4xl">
          <h3
            className="mb-4 text-center text-sm font-bold tracking-wide text-white/80"
            style={{ fontFamily: "var(--font-josefin-sans)" }}
          >
            DOCUMENTS — AS REQUIRED / WHEN APPLICABLE
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {exportDocuments.map((doc) => (
              <div key={doc.category} className="rounded-xl border border-white/15 bg-black/20 p-4">
                <h4
                  className="mb-1.5 text-[13px] font-bold text-[#EFA12D]"
                  style={{ fontFamily: "var(--font-josefin-sans)" }}
                >
                  {doc.category}
                </h4>
                <p className="text-[12px] leading-[18px] text-[#C6C6C6] md:text-[13px]">{doc.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 10 - HOW WE WORK ========== */}
      <section className="bg-primary w-full px-5 py-14 md:px-10 md:py-16 lg:px-[100px]">
        <h2
          className="mb-10 text-center text-[28px] font-bold uppercase text-white md:text-[36px]"
          style={{ fontFamily: "var(--font-josefin-sans)" }}
        >
          HOW <span className="text-[#EFA12D]">WE WORK</span>
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {howWeWork.map((step) => (
            <div
              key={step.step}
              className="relative flex flex-col rounded-xl border border-[#EFA12D]/25 p-5"
            >
              <span className="text-[26px] font-bold text-[#EFA12D]/50">{step.step}</span>
              <h3
                className="mt-1 text-[14px] font-bold text-white md:text-[15px]"
                style={{ fontFamily: "var(--font-josefin-sans)" }}
              >
                {step.title}
              </h3>
              <p className="mt-2 text-[13px] leading-[20px] text-[#C6C6C6]">{step.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== 11 - OPERATIONAL PROOF (production evidence) ========== */}
      <section className="bg-[#161616] w-full px-5 py-12 md:px-10 md:py-14 lg:px-[100px]">
        <h2
          className="mb-2 text-center text-[26px] font-bold uppercase text-white md:text-[32px]"
          style={{ fontFamily: "var(--font-josefin-sans)" }}
        >
          PRODUCTION <span className="text-[#EFA12D]">EVIDENCE</span>
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-[13px] text-[#9C9C9C] md:text-sm">
          Representative production and inspection activities from the Charcoalnesia team.
        </p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {productionEvidence.map((evidence) => (
            <figure key={evidence.caption} className="relative">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={evidence.image}
                  alt={evidence.caption}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <figcaption className="mt-2 text-center text-[12px] text-[#C6C6C6]">
                {evidence.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ========== 12 - SAMPLE + FACILITY VISIT ========== */}
      <section className="bg-primary w-full px-5 py-14 md:px-10 md:py-16 lg:px-[100px]">
        <h2
          className="mb-10 text-center text-[28px] font-bold uppercase text-white md:text-[36px]"
          style={{ fontFamily: "var(--font-josefin-sans)" }}
        >
          SAMPLE & <span className="text-[#EFA12D]">FACILITY VISIT</span>
        </h2>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#EFA12D]/30 bg-black/30 p-6 md:p-7">
            <h3
              className="mb-3 text-lg font-bold text-[#EFA12D]"
              style={{ fontFamily: "var(--font-josefin-sans)" }}
            >
              PRODUCT SAMPLES
            </h3>
            <p className="text-[14px] leading-[24px] text-[#C6C6C6]">
              Product evaluation samples are available for qualified buyers. Sample configuration is
              subject to availability. International courier freight is arranged according to the
              agreed sampling terms.
            </p>
          </div>
          <div className="rounded-2xl border border-[#EFA12D]/30 bg-black/30 p-6 md:p-7">
            <h3
              className="mb-3 text-lg font-bold text-[#EFA12D]"
              style={{ fontFamily: "var(--font-josefin-sans)" }}
            >
              FACILITY VISIT
            </h3>
            <p className="text-[14px] leading-[24px] text-[#C6C6C6]">
              Production-facility visits may be arranged for qualified buyers by appointment, subject
              to facility approval and production schedule.
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href="https://wa.me/628212991650?text=Hi%2C%20I%20would%20like%20to%20discuss%20samples%20or%20a%20facility%20visit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-[40px] bg-[#1B7308] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[#1c7a09] md:text-[15px]"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            <FaWhatsapp className="size-5" />
            Discuss Samples or a Visit
          </a>
        </div>
      </section>

      {/* ========== ARTICLE & NEWS ========== */}
      <section className="relative w-full overflow-hidden border-t border-[#D0D0D0] py-12 md:py-16">
        <h2
          className="mb-10 text-center text-[28px] font-bold uppercase text-white"
          style={{ fontFamily: "var(--font-josefin-sans)" }}
        >
          ARTICLE & <span className="text-[#EFA12D]">NEWS</span>
        </h2>
        <BlogCarousel posts={blogPosts} />
      </section>

      {/* ========== 13 - STRUCTURED RFQ ========== */}
      <section className="bg-[#161616] w-full px-5 py-14 md:px-10 md:py-16 lg:px-[100px]">
        <h2
          className="mb-2 text-center text-[28px] font-bold uppercase text-white md:text-[36px]"
          style={{ fontFamily: "var(--font-josefin-sans)" }}
        >
          REQUEST A <span className="text-[#EFA12D]">QUOTATION</span>
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-[14px] leading-[24px] text-[#C6C6C6] md:text-[15px]">
          Prepare your quotation request with the following information for a faster, more accurate
          response.
        </p>
        <div className="mx-auto mb-10 grid max-w-4xl grid-cols-1 gap-2.5 sm:grid-cols-2">
          {rfqFields.map((field) => (
            <div
              key={field}
              className="rounded-lg border border-white/15 bg-black/20 px-4 py-2.5 text-[13px] text-[#C6C6C6]"
            >
              {field}
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            href="/contact-us"
            className="rounded-[40px] bg-secondary px-10 py-4 text-[15px] font-bold text-white transition-all duration-300 hover:bg-[#B87C22] md:text-base"
            style={{ fontFamily: "var(--font-josefin-sans)" }}
          >
            SUBMIT REQUEST FOR QUOTATION
          </Link>
        </div>
      </section>
    </>
  );
}
