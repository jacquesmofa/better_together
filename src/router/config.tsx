
import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const OurStoryPage = lazy(() => import('../pages/our-story/page'));
const TheWordPage = lazy(() => import('../pages/the-word/page'));
const GrowthPage = lazy(() => import('../pages/growth/page'));
const GentlemanLadyPage = lazy(() => import('../pages/gentleman-lady/page'));
const ResourcesPage = lazy(() => import('../pages/resources/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/our-story',
    element: <OurStoryPage />,
  },
  {
    path: '/the-word',
    element: <TheWordPage />,
  },
  {
    path: '/growth',
    element: <GrowthPage />,
  },
  {
    path: '/gentleman-lady',
    element: <GentlemanLadyPage />,
  },
  {
    path: '/resources',
    element: <ResourcesPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
