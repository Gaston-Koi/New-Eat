// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jyncrcExmd4vsfVgQ1hNS1
// Component: uJVtfnPgHos8

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: jyncrcExmd4vsfVgQ1hNS1/projectcss
import sty from "./PlasmicBlogPost.module.css"; // plasmic-import: uJVtfnPgHos8/css

createPlasmicElementProxy;

export type PlasmicBlogPost__VariantMembers = {
  long: "long";
};
export type PlasmicBlogPost__VariantsArgs = {
  long?: SingleBooleanChoiceArg<"long">;
};
type VariantPropType = keyof PlasmicBlogPost__VariantsArgs;
export const PlasmicBlogPost__VariantProps = new Array<VariantPropType>("long");

export type PlasmicBlogPost__ArgsType = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  image?: React.ReactNode;
  author?: React.ReactNode;
};
type ArgPropType = keyof PlasmicBlogPost__ArgsType;
export const PlasmicBlogPost__ArgProps = new Array<ArgPropType>(
  "title",
  "description",
  "image",
  "author"
);

export type PlasmicBlogPost__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultBlogPostProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  image?: React.ReactNode;
  author?: React.ReactNode;
  long?: SingleBooleanChoiceArg<"long">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBlogPost__RenderFunc(props: {
  variants: PlasmicBlogPost__VariantsArgs;
  args: PlasmicBlogPost__ArgsType;
  overrides: PlasmicBlogPost__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "long",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.long
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root,
        { [sty.rootlong]: hasVariant($state, "long", "long") }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__xdUpd, {
          [sty.freeBoxlong__xdUpDxRjt5]: hasVariant($state, "long", "long")
        })}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__esIaZ)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"none"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100%"}
              src={{
                src: "/plasmic/new_eat_landing/images/b1.jpg",
                fullWidth: 370,
                fullHeight: 250,
                aspectRatio: undefined
              }}
            />
          ),

          value: args.image
        })}
      </div>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__nsaFv, {
          [sty.freeBoxlong__nsaFVxRjt5]: hasVariant($state, "long", "long")
        })}
      >
        {renderPlasmicSlot({
          defaultContents: "Why Brands are Looking at Local Language",
          value: args.title,
          className: classNames(sty.slotTargetTitle, {
            [sty.slotTargetTitlelong]: hasVariant($state, "long", "long")
          })
        })}
        {renderPlasmicSlot({
          defaultContents: "By Robert Norby / 18th March 2018",
          value: args.author,
          className: classNames(sty.slotTargetAuthor)
        })}
        {renderPlasmicSlot({
          defaultContents:
            "Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit, Sed Quia Consequuntur Magni Dolores Eos Qui Ratione Voluptatem Sequi Nesciunt....",
          value: args.description,
          className: classNames(sty.slotTargetDescription, {
            [sty.slotTargetDescriptionlong]: hasVariant($state, "long", "long")
          })
        })}
      </Stack__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBlogPost__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBlogPost__VariantsArgs;
    args?: PlasmicBlogPost__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBlogPost__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBlogPost__ArgsType,
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
          internalArgPropNames: PlasmicBlogPost__ArgProps,
          internalVariantPropNames: PlasmicBlogPost__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBlogPost__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBlogPost";
  } else {
    func.displayName = `PlasmicBlogPost.${nodeName}`;
  }
  return func;
}

export const PlasmicBlogPost = Object.assign(
  // Top-level PlasmicBlogPost renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicBlogPost
    internalVariantProps: PlasmicBlogPost__VariantProps,
    internalArgProps: PlasmicBlogPost__ArgProps
  }
);

export default PlasmicBlogPost;
/* prettier-ignore-end */
