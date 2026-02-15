

## सैनिक शिरोमणि सिखेड़ा - Web Portal Implementation Plan

### Phase 1: Layout Shell & Home Page
Build the complete three-column layout structure with all the visual design specified in the PRD:

**Header (Fixed Top)**
- Logo area with "सैनिक शिरोमणि सिखेड़ा" title and "ग्राम पंचायत पोर्टल" subtitle
- Center navigation links: होम, योजनाएं, ब्लॉग, हमारे बारे में, संपर्क
- Right side: लॉगिन and साइन अप buttons
- Blue gradient background with saffron accent colors

**Left Sidebar (Dark, 260px)**
- Dashboard link at top
- Three grouped sections: SERVICES (10 items like ग्राम इतिहास, योजना केंद्र, भूतपूर्व सैनिक, etc.), COMMUNITY (4 items), INFORMATION (3 items)
- Active state highlighting with saffron left border
- Badge counts on select items
- Scrollable with custom scrollbar

**Right Sidebar (Light, 300px)**
- Village Officials widget with photos, names, roles (Chaudhary Charan Singh as inspiration, Gram Pradhan, Gram Sachiv)
- Flash News widget with saffron left-border items and timestamps
- Quick Statistics grid (4 cards: total villagers, ex-servicemen, farmers, students)
- Quick Links widget (forms, notices, govt sites, emergency numbers)

**Home Page (Main Content Area)**
- Welcome hero section with village name
- Key highlights/announcements area
- Quick access cards for popular services
- Recent news/updates section

**Footer (Fixed Bottom)**
- Copyright, contact info, privacy policy, social links

### Phase 2: Authentication UI
- Login modal with email/phone + password fields
- Signup modal with name, email, phone, password fields
- Forgot Password flow UI
- OTP verification screen UI
- All styled in the government portal theme with Hindi labels

### Phase 3: Static Content Pages
- Create placeholder pages for all sidebar routes (ग्राम इतिहास, योजनाएं, भूतपूर्व सैनिक, वीर नारी, पेंशन, किसान, छात्रवृत्ति, श्रमिक, आवास)
- Community pages: सुझाव, शिकायत, ब्लॉग, वीडियो
- Information pages: About, Contact, Help
- All pages use hardcoded sample data in Hindi

### Design System
- Primary blue (#1E3A8A) with saffron (#F59E0B) accents throughout
- Noto Sans Devanagari font for Hindi text
- Government-style formal appearance
- Responsive for desktop and tablet viewports

