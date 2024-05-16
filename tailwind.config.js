module.exports = {
    content: ["./*.{html,js}", "./node_modules/flowbite/**/*.js", "./**/*.{html,js,php}"],
    theme: {
        extend: {
            animation: {
                marquee: 'marquee 25s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': {
                        transform: 'translateX(0)'
                    },
                    '100%': {
                        transform: 'translateX(-100%)'
                    },
                },
            },
            boxShadow: {
                '3d': '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
            },
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}