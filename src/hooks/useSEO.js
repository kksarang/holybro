import { useEffect } from 'react';

/**
 * Custom hook to set SEO metadata (title, description, Open Graph tags)
 * Compatible with React 19
 */
export const useSEO = ({ title, description, ogTitle, ogDescription, ogType = 'website' }) => {
    useEffect(() => {
        // Set page title
        if (title) {
            document.title = title;
        }

        // Set or update meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }
        if (description) {
            metaDescription.content = description;
        }

        // Open Graph title
        let ogTitleMeta = document.querySelector('meta[property="og:title"]');
        if (!ogTitleMeta) {
            ogTitleMeta = document.createElement('meta');
            ogTitleMeta.setAttribute('property', 'og:title');
            document.head.appendChild(ogTitleMeta);
        }
        ogTitleMeta.content = ogTitle || title;

        // Open Graph description
        let ogDescMeta = document.querySelector('meta[property="og:description"]');
        if (!ogDescMeta) {
            ogDescMeta = document.createElement('meta');
            ogDescMeta.setAttribute('property', 'og:description');
            document.head.appendChild(ogDescMeta);
        }
        ogDescMeta.content = ogDescription || description;

        // Open Graph type
        let ogTypeMeta = document.querySelector('meta[property="og:type"]');
        if (!ogTypeMeta) {
            ogTypeMeta = document.createElement('meta');
            ogTypeMeta.setAttribute('property', 'og:type');
            document.head.appendChild(ogTypeMeta);
        }
        ogTypeMeta.content = ogType;

        // Twitter Card
        let twitterCard = document.querySelector('meta[name="twitter:card"]');
        if (!twitterCard) {
            twitterCard = document.createElement('meta');
            twitterCard.name = 'twitter:card';
            document.head.appendChild(twitterCard);
        }
        twitterCard.content = 'summary_large_image';

        // Twitter title
        let twitterTitle = document.querySelector('meta[name="twitter:title"]');
        if (!twitterTitle) {
            twitterTitle = document.createElement('meta');
            twitterTitle.name = 'twitter:title';
            document.head.appendChild(twitterTitle);
        }
        twitterTitle.content = ogTitle || title;

        // Twitter description
        let twitterDesc = document.querySelector('meta[name="twitter:description"]');
        if (!twitterDesc) {
            twitterDesc = document.createElement('meta');
            twitterDesc.name = 'twitter:description';
            document.head.appendChild(twitterDesc);
        }
        twitterDesc.content = ogDescription || description;

    }, [title, description, ogTitle, ogDescription, ogType]);
};
