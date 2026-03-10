import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const StructuredData = ({ type = 'Organization', data }) => {
    const getStructuredData = () => {
        switch (type) {
            case 'Organization':
                return {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Holy Bro Group W.L.L",
                    "url": "https://www.holybrogroupqatar.com/",
                    "logo": "https://www.holybrogroupqatar.com/logo.webp",
                    "description": "Leading company in Qatar providing LNG plant components, construction materials, manpower supply, and commercial transportation services.",
                    "address": {
                        "@type": "PostalAddress",
                        "addressCountry": "QA",
                        "addressLocality": "Qatar"
                    },
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+974 31023132",
                        "contactType": "customer service",
                        "availableLanguage": ["English", "Arabic"]
                    },
                    "sameAs": [
                        "https://www.facebook.com/holybro",
                        "https://www.linkedin.com/company/holybro"
                    ]
                };

            case 'Service':
                return {
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": data.title,
                    "provider": {
                        "@type": "Organization",
                        "name": "Holy Bro Group W.L.L"
                    },
                    "description": data.description,
                    "areaServed": {
                        "@type": "Country",
                        "name": "Qatar"
                    }
                };

            case 'BreadcrumbList':
                return {
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": data.map((item, index) => ({
                        "@type": "ListItem",
                        "position": index + 1,
                        "name": item.name,
                        "item": item.url
                    }))
                };

            default:
                return null;
        }
    };

    const structuredData = getStructuredData();

    if (!structuredData) return null;

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

StructuredData.propTypes = {
    type: PropTypes.oneOf(['Organization', 'Service', 'BreadcrumbList']),
    data: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ])
};

export default StructuredData;
