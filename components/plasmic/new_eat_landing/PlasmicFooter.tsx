// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jyncrcExmd4vsfVgQ1hNS1
// Component: 5LfpYpAFTDMw

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { useScreenVariants as useScreenVariantsic8SJnshfjSw } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: ic8sJnshfjSW/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: jyncrcExmd4vsfVgQ1hNS1/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: 5LfpYpAFTDMw/css

import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: 8LmXamP3PB2B/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: hD5N-_tHxt4j/icon
import Icon28Icon from "./icons/PlasmicIcon__Icon28"; // plasmic-import: WGy6AMG5b5p_/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 3s7TwSnzoI2p/icon

createPlasmicElementProxy;

export type PlasmicFooter__VariantMembers = {};
export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: Flex__<"div">;
  columns?: Flex__<"div">;
};

export interface DefaultFooterProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsic8SJnshfjSw()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        hasGap={true}
        className={classNames(projectcss.all, sty.columns)}
      >
        <div className={classNames(projectcss.all, sty.column__eeo9W)}>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__xHIzt)}
          >
            <h3
              className={classNames(
                projectcss.all,
                projectcss.h3,
                projectcss.__wab_text,
                sty.h3__mf2U4
              )}
            >
              {"Juicy Juice"}
            </h3>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__omeQk
              )}
            >
              {hasVariant(globalVariants, "screen", "mobile")
                ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                : "Lorem ipsum dolor sit amet, consectetur adipiscing"}
            </div>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__osTLb)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___9YBi6
                )}
              >
                {"Connect with us"}
              </div>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__o3Scb)}
              >
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__kCvZ
                  )}
                  component={Link}
                  href={"#"}
                  platform={"nextjs"}
                  target={"_blank"}
                >
                  <Icon3Icon
                    className={classNames(projectcss.all, sty.svg__oKqN)}
                    role={"img"}
                  />
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__iaSdd
                  )}
                  component={Link}
                  href={"#"}
                  platform={"nextjs"}
                  target={"_blank"}
                >
                  <Icon2Icon
                    className={classNames(projectcss.all, sty.svg__sZrKk)}
                    role={"img"}
                  />
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link___3YRJf
                  )}
                  component={Link}
                  href={"#"}
                  platform={"nextjs"}
                  target={"_blank"}
                >
                  <Icon28Icon
                    className={classNames(projectcss.all, sty.svg___80Twk)}
                    role={"img"}
                  />
                </PlasmicLink__>
              </Stack__>
            </Stack__>
          </Stack__>
        </div>
        <div className={classNames(projectcss.all, sty.column__ewAth)}>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__m8WE)}
          >
            <h3
              className={classNames(
                projectcss.all,
                projectcss.h3,
                projectcss.__wab_text,
                sty.h3__n7ACa
              )}
            >
              {"Company"}
            </h3>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__vBFt)}
            >
              <Stack__
                as={PlasmicLink__}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__sb7R1
                )}
                component={Link}
                platform={"nextjs"}
              >
                {false ? (
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__v3A3)}
                    role={"img"}
                  />
                ) : null}
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__gh1Ee
                  )}
                >
                  {"About"}
                </div>
                {false ? (
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__gtZk4)}
                    role={"img"}
                  />
                ) : null}
              </Stack__>
              <Stack__
                as={PlasmicLink__}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__ffei8
                )}
                component={Link}
                platform={"nextjs"}
              >
                {false ? (
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__lCkzE)}
                    role={"img"}
                  />
                ) : null}
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__zbBNt
                  )}
                >
                  {"Twitter"}
                </div>
                {false ? (
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__xx5R7)}
                    role={"img"}
                  />
                ) : null}
              </Stack__>
            </Stack__>
          </Stack__>
        </div>
        <div className={classNames(projectcss.all, sty.column___93Nd)}>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___6Kp6A)}
          >
            <h3
              className={classNames(
                projectcss.all,
                projectcss.h3,
                projectcss.__wab_text,
                sty.h3__jlnAc
              )}
            >
              {"Legal"}
            </h3>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__kwKl9)}
            >
              <Stack__
                as={PlasmicLink__}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link___7W2PH
                )}
                component={Link}
                platform={"nextjs"}
              >
                {false ? (
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__h7Gdb)}
                    role={"img"}
                  />
                ) : null}
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__kvBZl
                  )}
                >
                  {"Privacy Policy"}
                </div>
                {false ? (
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__jecyt)}
                    role={"img"}
                  />
                ) : null}
              </Stack__>
              <Stack__
                as={PlasmicLink__}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link___5GXvr
                )}
                component={Link}
                platform={"nextjs"}
              >
                {false ? (
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__kFhO6)}
                    role={"img"}
                  />
                ) : null}
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__xJTnO
                  )}
                >
                  {"Terms"}
                </div>
                {false ? (
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__cbb2A)}
                    role={"img"}
                  />
                ) : null}
              </Stack__>
            </Stack__>
          </Stack__>
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___6ZKa4)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__nrC6Z)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__h4Ftc
            )}
          >
            <React.Fragment>
              <React.Fragment>
                {
                  "\u00a9 Company. All rights reserved. Site proudly built with "
                }
              </React.Fragment>
              {
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    projectcss.plasmic_default__inline,
                    sty.link__uAi6
                  )}
                  component={Link}
                  href={"https://www.plasmic.app"}
                  platform={"nextjs"}
                >
                  {"Plasmic"}
                </PlasmicLink__>
              }
              <React.Fragment>{"."}</React.Fragment>
            </React.Fragment>
          </div>
        </div>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "columns"],
  columns: ["columns"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  columns: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooter__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
