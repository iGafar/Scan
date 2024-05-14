import { RouteProps } from "react-router-dom";

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  expire: string;
}

export interface IUser {
  login: string;
  password: string;
}

interface eventFiltersInfo {
  companyLimit: number;
  usedCompanyCount: number;
}

export interface IUserInfo {
  eventFiltersInfo: eventFiltersInfo;
}

export interface IUserState {
  isAuth: boolean;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  usedCompany: number;
  companyLimit: number;
  isLoaded: boolean;
}

export type RouteData = Pick<RouteProps, "path" | "element"> & { key: string };

interface SearchEntity {
  type: "company";
  sparkId: null;
  entityId: null;
  inn: number;
  maxFullness: boolean;
  inBusinessNews: null;
}

interface SearchContext {
  targetSearchEntitiesContext: {
    targetSearchEntities: SearchEntity[];
    onlyMainRole: boolean;
    tonality: string;
    onlyWithRiskFactors: boolean;
    riskFactors: { and: string[]; or: string[]; not: string[] };
    themes: { and: string[]; or: string[]; not: string[] };
  };
  themesFilter: { and: string[]; or: string[]; not: string[] };
}

interface SearchArea {
  includedSources: string[];
  excludedSources: string[];
  includedSourceGroups: string[];
  excludedSourceGroups: string[];
}

interface AttributeFilters {
  excludeTechNews: boolean;
  excludeAnnouncements: boolean;
  excludeDigests: boolean;
}

interface IssueDateInterval {
  startDate: string;
  endDate: string;
}

type HistogramTypes = "totalDocuments" | "riskFactors";

export interface SearchOptions {
  issueDateInterval: IssueDateInterval;
  searchContext: SearchContext;
  searchArea: SearchArea;
  attributeFilters: AttributeFilters;
  similarMode: "duplicates";
  limit: number;
  sortType: "sourceInfluence";
  sortDirectionType: "desc";
  intervalType: "month";
  histogramTypes: HistogramTypes[];
}
