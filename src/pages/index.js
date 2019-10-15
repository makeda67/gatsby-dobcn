import React from 'react'

export default function index() {
    if (typeof window !== 'undefined') {
        window.location = '/catalog';
    }
    return null;
}

