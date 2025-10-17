# RetailerPro - Enterprise Retail Management Platform

![RetailerPro](https://img.shields.io/badge/RetailerPro-Enterprise-blue) ![PWA](https://img.shields.io/badge/PWA-Enabled-green) ![Offline](https://img.shields.io/badge/Offline-Capable-orange)

## 📋 Overview

RetailerPro is a comprehensive enterprise retail management platform designed specifically for Airtel distributors and field sales teams. The application provides robust tools for managing retailers, tracking prospects, and monitoring team performance with secure role-based access control.

## ✨ Features

### 🔐 Authentication & Security
- **Role-based access control** (Field Rep, Territory Manager, SIBO Agency)
- **SIBO25 password protection** for admin access
- **Secure local data storage**
- **Session management**

### 🏪 Retailer Management
- **Complete retailer profiling** with Site ID integration
- **Visitation tracking** with date and time
- **Service program management** (GA LM, MTD, QSSO, QAMA, KCB AGENT)
- **Device serial number tracking**
- **Advanced search and filtering**

### 👥 Prospect Management
- **Lead tracking and conversion pipeline**
- **Interest level classification** (High, Medium, Low)
- **Follow-up date management**
- **Status progression** (New → Contacted → Converted)

### ✅ Recruitment Tracking
- **Recruitment status management** (Yes/No/Pending/Follow-up)
- **Business type categorization**
- **Recruitment date tracking**
- **Notes and comments field**

### 🔄 Servicing Float Management
- **Service request tracking** for retailers
- **Multiple service types** (Device Repair, SIM Replacement, Float Top-up, Training, Other)
- **Amount tracking** for financial services
- **Service status management** (Completed, Pending, In Progress, Scheduled)

### 📊 Analytics & Reporting
- **Real-time dashboard** with key performance indicators
- **Target achievement tracking** (75 retailer recruitment target)
- **Conversion rate analytics**
- **Team performance metrics** for managers
- **Data export capabilities** (CSV, JSON)

### 📱 Progressive Web App
- **Installable** like a native app
- **Works offline** with cached data
- **Responsive design** for all devices
- **App-like experience** with standalone mode

## 🚀 Installation & Setup

### Web Installation
1. **Visit the application** in your browser
2. **Click "Install App"** button when prompted
3. **Or use browser menu**: 
   - Chrome: Menu → "Install RetailerPro"
   - Safari: Share button → "Add to Home Screen"
   - Edge: Menu → "Apps" → "Install RetailerPro"

### Local Development
```bash
# Clone or download the project files
# Serve using a local web server
python -m http.server 8000
# or
npx http-server
