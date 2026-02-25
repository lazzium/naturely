export default function LogoSVG({ className = "h-10 w-auto" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 400 200"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
        >
            <g transform="translate(10, 20)">
                {/* Left bracket */}
                <path d="M40,0 H10 V140 H40 V120 H30 V20 H40 Z" fill="#0080ff" />

                {/* FUN Text */}
                <text x="60" y="125" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="130" fill="#0080ff" letterSpacing="2">
                    FUN
                </text>

                {/* Right bracket */}
                <path d="M340,0 H370 V140 H340 V120 H350 V20 H340 Z" fill="#0080ff" />

                {/* Bottom part */}
                <g transform="translate(10, 150)">
                    {/* Left squares pattern */}
                    {/* Top row */}
                    <rect x="0" y="0" width="15" height="15" fill="#0080ff" />
                    <rect x="20" y="0" width="15" height="15" fill="#ff8c00" />
                    {/* Bottom row */}
                    <rect x="0" y="20" width="15" height="15" fill="#0080ff" />
                    <rect x="20" y="20" width="15" height="15" fill="#ff8c00" />
                    <rect x="40" y="20" width="15" height="15" fill="#0080ff" />

                    {/* HIGH TECH Text */}
                    <text x="70" y="32" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="38" fill="#ff8c00" letterSpacing="1">
                        HIGH TECH
                    </text>

                    {/* Right squares pattern */}
                    {/* Top row */}
                    <rect x="330" y="0" width="15" height="15" fill="#ff8c00" />
                    <rect x="350" y="0" width="15" height="15" fill="#0080ff" />
                    {/* Bottom row */}
                    <rect x="310" y="20" width="15" height="15" fill="#0080ff" />
                    <rect x="330" y="20" width="15" height="15" fill="#ff8c00" />
                    <rect x="350" y="20" width="15" height="15" fill="#0080ff" />
                </g>
            </g>
        </svg>
    );
}
